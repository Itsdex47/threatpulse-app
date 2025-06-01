// AI service for threat analysis using DeepSeek and Hugging Face models

import axios from 'axios';
import { ThreatReport, ThreatType, ThreatSeverity, ThreatCategory, UserProfile } from '@/types';

interface AIAnalysisResult {
  category: ThreatCategory;
  riskScore: number;
  confidence: number;
  summary: string;
  threatType: ThreatType;
  severity: ThreatSeverity;
  relevantFor: UserProfile[];
  actionableInsights: string[];
}

class AIService {
  private deepseekApiKey: string;
  private huggingFaceApiKey: string;

  constructor() {
    this.deepseekApiKey = process.env.DEEPSEEK_API_KEY || '';
    this.huggingFaceApiKey = process.env.HUGGINGFACE_API_KEY || '';
  }

  async analyzeReport(rawReport: string, location: string): Promise<AIAnalysisResult> {
    try {
      const analysis = await this.analyzeWithDeepSeek(rawReport, location);
      return analysis;
    } catch (error) {
      console.error('DeepSeek analysis failed, falling back to Hugging Face:', error);
      return await this.analyzeWithHuggingFace(rawReport, location);
    }
  }

  private async analyzeWithDeepSeek(report: string, location: string): Promise<AIAnalysisResult> {
    const prompt = `Analyze this travel safety report from ${location}:\n\n"${report}"\n\nProvide JSON with: category, riskScore (0-100), confidence (0-100), summary, threatType, severity, relevantFor, actionableInsights`;

    const response = await axios.post(
      'https://api.deepseek.com/v1/chat/completions',
      {
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
        max_tokens: 500
      },
      {
        headers: {
          'Authorization': `Bearer ${this.deepseekApiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const aiResponse = response.data.choices[0].message.content;
    return this.parseAIResponse(aiResponse);
  }

  private async analyzeWithHuggingFace(report: string, location: string): Promise<AIAnalysisResult> {
    const classificationResponse = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-mnli',
      {
        inputs: report,
        parameters: {
          candidate_labels: ['scam', 'theft', 'violence', 'surveillance', 'fraud', 'safe']
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${this.huggingFaceApiKey}`
        }
      }
    );

    const topLabel = classificationResponse.data.labels[0];
    const confidence = Math.round(classificationResponse.data.scores[0] * 100);

    return {
      category: this.mapToCategory(topLabel),
      riskScore: confidence,
      confidence: confidence,
      summary: `Potential ${topLabel} incident reported in ${location}`,
      threatType: topLabel as ThreatType,
      severity: this.mapToSeverity(confidence),
      relevantFor: [{ travelStyle: 'solo', experience: 'beginner' }],
      actionableInsights: [`Stay alert for ${topLabel} incidents in ${location}`]
    };
  }

  private parseAIResponse(response: string): AIAnalysisResult {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('No JSON found in response');
      
      const parsed = JSON.parse(jsonMatch[0]);
      
      return {
        category: parsed.category || 'street-smart',
        riskScore: Math.min(100, Math.max(0, parsed.riskScore || 50)),
        confidence: Math.min(100, Math.max(0, parsed.confidence || 50)),
        summary: parsed.summary || 'Travel safety incident reported',
        threatType: parsed.threatType || 'other',
        severity: parsed.severity || 'medium',
        relevantFor: parsed.relevantFor || [],
        actionableInsights: parsed.actionableInsights || []
      };
    } catch (error) {
      console.error('Failed to parse AI response:', error);
      return {
        category: 'street-smart',
        riskScore: 50,
        confidence: 30,
        summary: 'Unable to analyze report automatically',
        threatType: 'other',
        severity: 'medium',
        relevantFor: [],
        actionableInsights: ['Exercise standard travel precautions']
      };
    }
  }

  async generateRecommendations(
    location: string, 
    userProfile: UserProfile,
    recentThreats: ThreatReport[]
  ): Promise<string[]> {
    const threatSummary = recentThreats
      .slice(0, 5)
      .map(t => `${t.threatType}: ${t.title}`)
      .join('; ');

    const prompt = `Generate 3-5 personalized safety recommendations for a ${userProfile.travelStyle} ${userProfile.experience} traveler visiting ${location}. Recent threats: ${threatSummary}`;

    try {
      const response = await axios.post(
        'https://api.deepseek.com/v1/chat/completions',
        {
          model: 'deepseek-chat',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.4,
          max_tokens: 300
        },
        {
          headers: {
            'Authorization': `Bearer ${this.deepseekApiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const recommendations = response.data.choices[0].message.content;
      
      const lines = recommendations
        .split('\n')
        .filter(line => line.trim() && (line.includes('-') || line.includes('•') || line.match(/^\d/)))
        .map(line => line.replace(/^[-•\d.\s]+/, '').trim())
        .slice(0, 5);

      return lines.length > 0 ? lines : this.getDefaultRecommendations(userProfile);
    } catch (error) {
      console.error('Failed to generate AI recommendations:', error);
      return this.getDefaultRecommendations(userProfile);
    }
  }

  private mapToCategory(threatType: string): ThreatCategory {
    const digitalThreats = ['surveillance', 'digital-risk', 'fraud'];
    const streetThreats = ['scam', 'theft', 'pickpocket', 'robbery'];
    
    if (digitalThreats.includes(threatType)) return 'digital-risks';
    if (streetThreats.includes(threatType)) return 'street-smart';
    return 'local-intel';
  }

  private mapToSeverity(riskScore: number): ThreatSeverity {
    if (riskScore >= 80) return 'critical';
    if (riskScore >= 60) return 'high';
    if (riskScore >= 40) return 'medium';
    return 'low';
  }

  private getDefaultRecommendations(profile: UserProfile): string[] {
    const base = [
      'Stay aware of your surroundings, especially in crowded areas',
      'Keep copies of important documents in separate locations',
      'Use reputable transportation services and verify driver details'
    ];

    if (profile.travelStyle === 'solo') {
      base.push('Share your itinerary with trusted contacts');
    }

    if (profile.experience === 'beginner') {
      base.push('Research local customs and common scams before arriving');
    }

    return base.slice(0, 4);
  }
}

export const aiService = new AIService();
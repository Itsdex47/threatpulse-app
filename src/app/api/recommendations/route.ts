import { NextRequest, NextResponse } from 'next/server';
import { aiService } from '@/lib/ai-service';
import { UserProfile, ThreatReport } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const { location, userProfile, recentThreats } = await request.json();

    if (!location || !userProfile) {
      return NextResponse.json(
        { error: 'Location and user profile are required' },
        { status: 400 }
      );
    }

    // Generate personalized recommendations
    const recommendations = await aiService.generateRecommendations(
      location,
      userProfile as UserProfile,
      recentThreats as ThreatReport[] || []
    );

    return NextResponse.json({
      success: true,
      recommendations
    });
  } catch (error) {
    console.error('Error generating recommendations:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendations' },
      { status: 500 }
    );
  }
}
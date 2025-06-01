import { NextRequest, NextResponse } from 'next/server';
import { aiService } from '@/lib/ai-service';

export async function POST(request: NextRequest) {
  try {
    const { report, location } = await request.json();

    if (!report || !location) {
      return NextResponse.json(
        { error: 'Report and location are required' },
        { status: 400 }
      );
    }

    // Analyze the report using AI
    const analysis = await aiService.analyzeReport(report, location);

    return NextResponse.json({
      success: true,
      analysis
    });
  } catch (error) {
    console.error('Error analyzing report:', error);
    return NextResponse.json(
      { error: 'Failed to analyze report' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'ThreatPulse AI Analysis API is running' },
    { status: 200 }
  );
}
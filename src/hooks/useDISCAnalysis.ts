import { useState, useCallback } from 'react';
import { openai, validateApiKey } from '../lib/openai';
import { DISC_FRAMEWORK, type DISCAnalysisResult } from '../constants/discFramework';

interface UseDISCAnalysisReturn {
  analyze: (transcript: string) => Promise<DISCAnalysisResult>;
  loading: boolean;
  error: string | null;
  result: DISCAnalysisResult | null;
  clearError: () => void;
  clearResult: () => void;
}

export const useDISCAnalysis = (): UseDISCAnalysisReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DISCAnalysisResult | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const clearResult = useCallback(() => {
    setResult(null);
  }, []);

  const analyze = useCallback(async (transcript: string): Promise<DISCAnalysisResult> => {
    // Validation
    if (!validateApiKey()) {
      const errorMsg = 'OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your .env file.';
      setError(errorMsg);
      throw new Error(errorMsg);
    }

    if (!transcript || transcript.trim().length === 0) {
      const errorMsg = 'Please enter a transcript to analyze.';
      setError(errorMsg);
      throw new Error(errorMsg);
    }

    const wordCount = transcript.trim().split(/\s+/).length;
    if (wordCount < 50) {
      const errorMsg = `Transcript is too short (${wordCount} words). Please provide at least 50 words for meaningful analysis.`;
      setError(errorMsg);
      throw new Error(errorMsg);
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const systemPrompt = `You are a DISC behavioral assessment expert. Analyze transcripts using the exact framework provided. Output ONLY valid JSON.`;

      const userPrompt = `FRAMEWORK
***
${DISC_FRAMEWORK}

TRANSCRIPT
***
${transcript}

TASK: Complete DISC analysis following framework structure precisely.
Score each trait 1-100. Provide evidence quotes.

Output JSON schema:
{
  "overall_profile": {
    "primary": "D/I/S/C",
    "scores": {"D": number, "I": number, "S": number, "C": number},
    "summary": "2-sentence profile summary"
  },
  "detailed_breakdown": [
    {
      "trait": "Dominance",
      "score": number,
      "evidence": ["quote1", "quote2"],
      "analysis": "1-2 sentences"
    },
    {
      "trait": "Influence",
      "score": number,
      "evidence": ["quote1", "quote2"],
      "analysis": "1-2 sentences"
    },
    {
      "trait": "Steadiness",
      "score": number,
      "evidence": ["quote1", "quote2"],
      "analysis": "1-2 sentences"
    },
    {
      "trait": "Conscientiousness",
      "score": number,
      "evidence": ["quote1", "quote2"],
      "analysis": "1-2 sentences"
    }
  ],
  "recommendations": ["bullet1", "bullet2", "bullet3"],
  "confidence": "high/medium/low"
}`;

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.1,
        max_tokens: 4000,
        response_format: { type: 'json_object' }
      });

      const content = completion.choices[0]?.message?.content;
      
      if (!content) {
        throw new Error('No response received from OpenAI API');
      }

      const parsedResult: DISCAnalysisResult = JSON.parse(content);
      
      // Validate the structure
      if (!parsedResult.overall_profile || !parsedResult.detailed_breakdown) {
        throw new Error('Invalid response format from API');
      }

      setResult(parsedResult);
      setLoading(false);
      return parsedResult;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      setLoading(false);
      throw err;
    }
  }, []);

  return {
    analyze,
    loading,
    error,
    result,
    clearError,
    clearResult,
  };
};

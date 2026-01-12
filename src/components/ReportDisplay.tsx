import React from 'react';
import ReactJson from '@microlink/react-json-view';
import { Copy, CheckCheck, TrendingUp } from 'lucide-react';
import type { DISCAnalysisResult } from '../constants/discFramework';
import { copyToClipboard } from '../utils/copyToClipboard';

interface ReportDisplayProps {
  result: DISCAnalysisResult;
}

export const ReportDisplay: React.FC<ReportDisplayProps> = ({ result }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(JSON.stringify(result, null, 2));
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getConfidenceBadgeColor = (confidence: string) => {
    switch (confidence) {
      case 'high':
        return 'bg-carbon-green-10 text-carbon-green-70 border-carbon-green-50';
      case 'medium':
        return 'bg-carbon-yellow-10 text-carbon-gray-100 border-carbon-yellow-60';
      case 'low':
        return 'bg-carbon-red-10 text-carbon-red-70 border-carbon-red-50';
      default:
        return 'bg-carbon-gray-10 text-carbon-gray-100 border-carbon-gray-50';
    }
  };

  const getDimensionColor = (dimension: string) => {
    switch (dimension) {
      case 'D':
        return 'text-carbon-red-60';
      case 'I':
        return 'text-carbon-yellow-60';
      case 'S':
        return 'text-carbon-green-60';
      case 'C':
        return 'text-carbon-blue-60';
      default:
        return 'text-carbon-gray-100';
    }
  };

  const getDimensionBgColor = (dimension: string) => {
    switch (dimension) {
      case 'D':
        return 'bg-carbon-red-60';
      case 'I':
        return 'bg-carbon-yellow-60';
      case 'S':
        return 'bg-carbon-green-60';
      case 'C':
        return 'bg-carbon-blue-60';
      default:
        return 'bg-carbon-gray-60';
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex justify-between items-center pb-4 border-b-2 border-carbon-gray-20">
        <div className="flex items-center gap-3">
          <TrendingUp className="text-carbon-blue-60" size={24} strokeWidth={2.5} />
          <h2 className="text-2xl font-semibold text-carbon-gray-100 tracking-tight">
            Analysis Report
          </h2>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-carbon-blue-60 text-white font-medium hover:bg-carbon-blue-70 transition-colors text-sm"
          aria-label="Copy report to clipboard"
        >
          {copied ? (
            <>
              <CheckCheck size={16} strokeWidth={2.5} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} strokeWidth={2.5} />
              Copy Report
            </>
          )}
        </button>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-carbon-gray-10 border-l-4 border-carbon-blue-60 p-5">
          <h3 className="text-xs font-semibold text-carbon-gray-70 mb-3 uppercase tracking-widest">
            Primary Profile
          </h3>
          <p className={`text-5xl font-bold ${getDimensionColor(result.overall_profile.primary)} mb-2`}>
            {result.overall_profile.primary}
          </p>
          <p className="text-sm text-carbon-gray-90 font-medium">
            {result.overall_profile.primary === 'D' && 'Dominance'}
            {result.overall_profile.primary === 'I' && 'Influence'}
            {result.overall_profile.primary === 'S' && 'Steadiness'}
            {result.overall_profile.primary === 'C' && 'Conscientiousness'}
          </p>
        </div>

        <div className="bg-carbon-gray-10 border-l-4 border-carbon-blue-60 p-5">
          <h3 className="text-xs font-semibold text-carbon-gray-70 mb-3 uppercase tracking-widest">
            Confidence Level
          </h3>
          <span className={`inline-block px-4 py-2 border-2 text-sm font-bold uppercase tracking-wider ${getConfidenceBadgeColor(result.confidence)}`}>
            {result.confidence}
          </span>
        </div>

        <div className="bg-carbon-gray-10 border-l-4 border-carbon-blue-60 p-5">
          <h3 className="text-xs font-semibold text-carbon-gray-70 mb-3 uppercase tracking-widest">
            Top Score
          </h3>
          <p className="text-5xl font-bold text-carbon-blue-60 mb-2">
            {Math.max(...Object.values(result.overall_profile.scores))}
          </p>
          <p className="text-sm text-carbon-gray-90 font-medium">
            out of 100
          </p>
        </div>
      </div>

      {/* DISC Scores */}
      <div className="mb-6 bg-carbon-gray-10 border-l-4 border-carbon-blue-60 p-5">
        <h3 className="text-xs font-semibold text-carbon-gray-70 mb-4 uppercase tracking-widest">
          DISC Score Breakdown
        </h3>
        <div className="space-y-4">
          {Object.entries(result.overall_profile.scores).map(([dimension, score]) => (
            <div key={dimension}>
              <div className="flex justify-between mb-2">
                <span className={`text-sm font-bold ${getDimensionColor(dimension)} font-ibm-plex-mono uppercase tracking-wider`}>
                  {dimension} - {dimension === 'D' && 'Dominance'}
                  {dimension === 'I' && 'Influence'}
                  {dimension === 'S' && 'Steadiness'}
                  {dimension === 'C' && 'Conscientiousness'}
                </span>
                <span className="text-sm font-bold text-carbon-gray-100 font-ibm-plex-mono">{score}</span>
              </div>
              <div className="w-full bg-carbon-gray-20 h-3 relative overflow-hidden">
                <div
                  className={`h-3 transition-all duration-500 ${getDimensionBgColor(dimension)}`}
                  style={{ width: `${score}%` }}
                />
                {/* Score indicator line */}
                <div 
                  className="absolute top-0 h-full w-0.5 bg-carbon-gray-100 opacity-50"
                  style={{ left: `${score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 bg-carbon-blue-10 border-l-4 border-carbon-blue-60 p-5">
        <h3 className="text-xs font-semibold text-carbon-gray-100 mb-3 uppercase tracking-widest">
          Profile Summary
        </h3>
        <p className="text-carbon-gray-100 text-sm leading-relaxed">
          {result.overall_profile.summary}
        </p>
      </div>

      {/* Detailed Breakdown */}
      <div className="mb-6 bg-carbon-gray-10 border-l-4 border-carbon-blue-60 p-5">
        <h3 className="text-xs font-semibold text-carbon-gray-70 mb-4 uppercase tracking-widest">
          Detailed Analysis
        </h3>
        <div className="space-y-4">
          {result.detailed_breakdown.map((item, index) => (
            <div key={index} className="bg-white p-4 border-l-2 border-carbon-gray-40">
              <div className="flex justify-between items-start mb-2">
                <h4 className={`text-base font-bold ${getDimensionColor(item.trait.charAt(0))}`}>
                  {item.trait}
                </h4>
                <span className="text-sm font-bold text-carbon-gray-100 font-ibm-plex-mono">
                  {item.score}/100
                </span>
              </div>
              <p className="text-sm text-carbon-gray-90 mb-3 leading-relaxed">
                {item.analysis}
              </p>
              {item.evidence && item.evidence.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-carbon-gray-70 mb-2 uppercase tracking-wider">
                    Evidence:
                  </p>
                  <ul className="space-y-1">
                    {item.evidence.map((quote, idx) => (
                      <li key={idx} className="text-xs text-carbon-gray-90 pl-4 border-l-2 border-carbon-gray-30 italic">
                        "{quote}"
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-6 bg-carbon-green-10 border-l-4 border-carbon-green-60 p-5">
        <h3 className="text-xs font-semibold text-carbon-gray-100 mb-3 uppercase tracking-widest">
          Communication Recommendations
        </h3>
        <ul className="space-y-2">
          {result.recommendations.map((rec, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-carbon-gray-100">
              <span className="text-carbon-green-60 font-bold flex-shrink-0">→</span>
              <span className="leading-relaxed">{rec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import { useState } from 'react';
import { AlertCircle, RefreshCw, Sparkles } from 'lucide-react';
import { TextAreaInput } from './components/TextAreaInput';
import { ReportDisplay } from './components/ReportDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useDISCAnalysis } from './hooks/useDISCAnalysis';

function App() {
  const [transcript, setTranscript] = useState('');
  const { analyze, loading, error, result, clearError, clearResult } = useDISCAnalysis();

  const handleAnalyze = async () => {
    try {
      await analyze(transcript);
    } catch (err) {
      // Error is handled by the hook
    }
  };

  const handleClearAll = () => {
    setTranscript('');
    clearResult();
    clearError();
  };

  return (
    <div className="min-h-screen bg-carbon-gray-10 font-ibm-plex-sans p-4 md:p-6 lg:p-8 xl:p-12">
      <div className="max-w-6xl mx-auto bg-white shadow-carbon-lg p-6 pb-12 sm:p-8 sm:pb-16">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-carbon-blue-60 p-2 rounded">
              <Sparkles className="text-white" size={28} strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl font-semibold text-carbon-gray-100 tracking-tight">
              DISC Profile Analyzer
            </h1>
          </div>
          <p className="text-base text-carbon-gray-70 max-w-3xl leading-relaxed">
            Analyze conversation transcripts to determine DISC behavioral profiles using AI. 
            Paste a transcript below and get detailed insights into communication styles.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-carbon-gray-10 p-6 mb-6">
          <TextAreaInput
            value={transcript}
            onChange={setTranscript}
            disabled={loading}
          />

          {/* Action Buttons */}
          <div className="mt-6 flex gap-2 justify-end">
            <button
              onClick={handleClearAll}
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 bg-carbon-gray-10 text-carbon-gray-100 border-2 border-carbon-gray-80 font-medium hover:bg-carbon-gray-20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon-blue-60"
              aria-label="Clear all inputs and results"
            >
              <RefreshCw size={16} strokeWidth={2.5} />
              Clear
            </button>
            <button
              onClick={handleAnalyze}
              disabled={loading || !transcript.trim()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-carbon-blue-60 text-white font-medium hover:bg-carbon-blue-70 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon-blue-60"
              aria-label="Analyze transcript"
            >
              <Sparkles size={16} strokeWidth={2.5} />
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mt-6 bg-carbon-red-10 border-l-4 border-carbon-red-70 p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-carbon-red-70 flex-shrink-0 mt-0.5" size={20} strokeWidth={2.5} />
                <div className="flex-1">
                  <h3 className="font-semibold text-carbon-gray-100 mb-1 text-sm">Error</h3>
                  <p className="text-carbon-gray-90 text-sm">{error}</p>
                </div>
                <button
                  onClick={clearError}
                  className="text-carbon-gray-100 hover:text-carbon-gray-70 text-sm font-medium underline"
                  aria-label="Dismiss error"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-carbon-gray-10 p-8 mb-6">
            <LoadingSpinner />
          </div>
        )}

        {/* Results Display */}
        {result && !loading && (
          <div className="bg-carbon-gray-10 p-6 pb-8 mb-6">
            <ReportDisplay result={result} />
          </div>
        )}

        {/* Footer Info */}
        {!result && !loading && (
          <div className="mt-8 pt-6 border-t-2 border-carbon-gray-20">
            <p className="text-sm text-carbon-gray-70 text-center">
              Powered by OpenAI GPT-4o-mini • Recommended: 150+ words for reliable analysis
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

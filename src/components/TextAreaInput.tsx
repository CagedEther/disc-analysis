import React from 'react';

interface TextAreaInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  value,
  onChange,
  placeholder = 'Paste your transcript here (minimum 50 words, recommended 150+ for best results)...',
  disabled = false,
}) => {
  const wordCount = value.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div className="w-full">
      <div className="mb-3 flex justify-between items-center">
        <label 
          htmlFor="transcript-input" 
          className="block text-sm font-semibold text-carbon-gray-100 tracking-wide"
        >
          Transcript Input
        </label>
        <span className="text-sm text-carbon-gray-70 font-ibm-plex-mono">
          {wordCount} {wordCount === 1 ? 'word' : 'words'}
        </span>
      </div>
      <textarea
        id="transcript-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full h-64 px-4 py-3 bg-carbon-gray-10 border-b-2 border-carbon-gray-80 text-carbon-gray-100 placeholder:text-carbon-gray-50 focus:bg-white focus:border-carbon-blue-60 focus:outline-none resize-none disabled:bg-carbon-gray-20 disabled:cursor-not-allowed disabled:text-carbon-gray-50 transition-colors font-ibm-plex-sans text-sm leading-relaxed"
        aria-label="Transcript input"
      />
      <div className="mt-2 text-xs text-carbon-gray-60">
        {wordCount < 50 && wordCount > 0 && (
          <span className="text-carbon-red-60">
            ⚠ At least 50 words recommended for analysis
          </span>
        )}
        {wordCount >= 50 && wordCount < 150 && (
          <span className="text-carbon-yellow-60">
            ℹ 150+ words recommended for best results
          </span>
        )}
        {wordCount >= 150 && (
          <span className="text-carbon-green-60">
            ✓ Good word count for analysis
          </span>
        )}
      </div>
    </div>
  );
};

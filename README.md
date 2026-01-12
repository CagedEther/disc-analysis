# DISC Profile Analyzer

A production-ready React application that analyzes conversation transcripts to determine DISC behavioral profiles using OpenAI's GPT-4o-mini model.

## Features

- 🎯 **DISC Framework Analysis**: Embedded comprehensive DISC framework for behavioral assessment
- 🤖 **AI-Powered**: Uses OpenAI GPT-4o-mini for accurate profile analysis
- 📊 **Visual Results**: Beautiful UI with score visualizations and detailed breakdowns
- 📋 **Copy to Clipboard**: Easy sharing of analysis results
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Feedback**: Loading states, error handling, and validation
- 🎨 **Modern UI**: Built with Tailwind CSS and Lucide icons

## DISC Framework

The app analyzes transcripts across four dimensions:

- **D (Dominance)**: Direct, decisive, competitive, results-oriented
- **I (Influence)**: Enthusiastic, optimistic, collaborative, expressive
- **S (Steadiness)**: Patient, reliable, team-oriented, calm, supportive
- **C (Conscientiousness)**: Analytical, precise, systematic, detail-oriented

## Prerequisites

- Node.js 18+ and npm
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   cd disc-analyzer
   npm install
   ```

3. **Configure your OpenAI API key**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=sk-your-api-key-here
   ```

## Usage

1. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The app will open at `http://localhost:3000`

2. **Analyze a transcript**
   - Paste a conversation transcript (minimum 50 words, recommended 150+)
   - Click the "Analyze" button
   - Wait 10-30 seconds for AI analysis
   - View your detailed DISC profile report

3. **Copy results**
   - Click "Copy Report" to copy the JSON analysis to clipboard
   - Click "Clear All" to start a new analysis

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **JSON Display**: @microlink/react-json-view
- **AI**: OpenAI API (gpt-4o-mini)

## Project Structure

```
src/
├── App.tsx                      # Main application component
├── main.tsx                     # Application entry point
├── index.css                    # Global styles
├── components/
│   ├── TextAreaInput.tsx        # Transcript input component
│   ├── ReportDisplay.tsx        # Results display component
│   └── LoadingSpinner.tsx       # Loading state component
├── constants/
│   └── discFramework.ts         # Embedded DISC framework
├── hooks/
│   └── useDISCAnalysis.ts       # OpenAI integration hook
├── lib/
│   └── openai.ts                # OpenAI client configuration
└── utils/
    └── copyToClipboard.ts       # Clipboard utility
```

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Important Notes

### Security
- ⚠️ The app currently makes API calls directly from the browser (`dangerouslyAllowBrowser: true`)
- **For production**: Implement a backend proxy to protect your API key
- Never commit your `.env` file to version control

### API Costs
- Uses GPT-4o-mini (~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens)
- Typical analysis costs $0.001-0.003 per request
- Monitor usage at [OpenAI Platform](https://platform.openai.com/usage)

### Analysis Quality
- **Best results**: 350+ words
- **Minimum**: 50 words (tentative assessment)
- **Recommended**: 150+ words for reliable analysis
- Context matters: formal vs. casual, stress level, role in conversation

## Troubleshooting

### "OpenAI API key is not configured"
- Ensure `.env` file exists in the root directory
- Verify the key starts with `VITE_` prefix
- Restart the dev server after adding the key

### "Transcript is too short"
- Provide at least 50 words of transcript text
- Longer transcripts (150+ words) yield more reliable results

### API Errors
- Check your OpenAI API key is valid
- Verify you have credits/usage limits available
- Check your internet connection

## License

MIT

## Deployment

### Deploy to Vercel

This app is ready to deploy to Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy:**
1. Push to GitHub
2. Import repository in Vercel
3. Add `VITE_OPENAI_API_KEY` environment variable
4. Deploy!

### Environment Variables on Vercel

Go to **Project Settings** → **Environment Variables** and add:
- `VITE_OPENAI_API_KEY`: Your OpenAI API key

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

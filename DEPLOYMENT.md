# Deployment Guide

This guide covers deploying the DISC Analysis app to GitHub and Vercel.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- [Vercel Account](https://vercel.com/signup)
- OpenAI API Key from [OpenAI Platform](https://platform.openai.com/api-keys)

## Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   cd disc-analyzer
   git init
   ```

2. **Add all files to Git**:
   ```bash
   git add .
   git commit -m "Initial commit: DISC Analysis App"
   ```

3. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/CagedEther/disc-analysis.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository: `CagedEther/disc-analysis`
4. Configure your project:
   - **Framework Preset**: Vite
   - **Root Directory**: `disc-analyzer`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
5. **Add Environment Variables**:
   - Click on "Environment Variables"
   - Add: `VITE_OPENAI_API_KEY` = `your_actual_openai_api_key`
   - Make sure it's available for Production, Preview, and Development
6. Click **"Deploy"**

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd disc-analyzer
   vercel
   ```

4. **Add Environment Variables**:
   ```bash
   vercel env add VITE_OPENAI_API_KEY
   ```
   Enter your OpenAI API key when prompted.

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Environment Variables

The app requires the following environment variable:

- `VITE_OPENAI_API_KEY`: Your OpenAI API key

### Setting Environment Variables on Vercel

1. Go to your project on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add `VITE_OPENAI_API_KEY` with your OpenAI API key
4. Select which environments to apply it to (Production, Preview, Development)
5. Click **"Save"**

### Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=sk-your-actual-key-here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Important Security Notes

⚠️ **WARNING**: This app uses `dangerouslyAllowBrowser: true` in the OpenAI client, which means the API key is exposed in the browser. This is **NOT recommended for production use**.

### Recommended Production Setup

For production, you should:

1. **Create a backend API** (e.g., using Next.js API routes, Express, or serverless functions)
2. **Move the OpenAI API calls to the backend**
3. **Never expose your API key in the browser**

Example with Vercel Serverless Functions:
- Create `/api/analyze.ts` endpoint
- Call OpenAI from the backend
- Frontend calls your API endpoint instead

## Troubleshooting

### Build Fails on Vercel

- Check that all dependencies are in `package.json`
- Ensure TypeScript compilation passes: `npm run build` locally
- Check build logs in Vercel dashboard

### App Loads but Doesn't Work

- Verify environment variables are set correctly in Vercel
- Check that `VITE_OPENAI_API_KEY` is present (not `OPENAI_API_KEY`)
- Check browser console for errors

### Environment Variables Not Working

- Make sure the variable name starts with `VITE_` (required by Vite)
- Redeploy after adding environment variables
- Clear cache and redeploy if needed

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy every push to `main` branch (Production)
- Create preview deployments for pull requests
- Run build checks on each deployment

## Custom Domain (Optional)

1. Go to your project on Vercel
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Monitoring

- View deployment logs in Vercel dashboard
- Monitor usage in OpenAI dashboard
- Set up spending limits in OpenAI to control costs

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [OpenAI API Documentation](https://platform.openai.com/docs)

# Deployment Guide for Emmanuel Ethiopian Tours

This guide explains how to deploy the Emmanuel Ethiopian Tours website to Vercel with Builder.io integration.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Builder.io account
- Node.js 16+ installed locally

## 1. Builder.io Setup

1. Create a Builder.io account at [builder.io](https://builder.io)
2. Create a new space for your project
3. Get your Public API Key from the Builder.io dashboard
4. Note down your API key - you'll need it for deployment

## 2. GitHub Repository Setup

1. Push your code to GitHub repository
2. Ensure all files are committed and pushed
3. Your repository should be public or accessible by Vercel

## 3. Vercel Deployment

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `public`
   - **Install Command**: `npm install`

5. Add Environment Variables:
   - Key: `BUILDER_PUBLIC_KEY`
   - Value: Your Builder.io Public API Key

6. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variable
vercel env add BUILDER_PUBLIC_KEY production
# Enter your Builder.io API key when prompted
```

## 4. Environment Variables Configuration

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `BUILDER_PUBLIC_KEY` | Your Builder.io public API key | `abc123def456...` |

### Setting Environment Variables in Vercel

1. Go to your project dashboard in Vercel
2. Navigate to Settings → Environment Variables
3. Add the following variables:
   - **Name**: `BUILDER_PUBLIC_KEY`
   - **Value**: Your Builder.io public API key
   - **Environment**: Production, Preview, and Development

## 5. Builder.io Content Configuration

After deployment, configure your content paths in Builder.io:

1. Go to your Builder.io dashboard
2. Create content entries for:
   - `hero-headline` - Main hero section title
   - `hero-subheadline` - Hero section subtitle

## 6. Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Configure DNS records as instructed by Vercel

## 7. Build Process

The deployment process includes:

1. **Install dependencies**: `npm install`
2. **Build CSS**: Compile Tailwind CSS with minification
3. **Copy files**: Copy HTML and static assets to public directory
4. **Inject environment variables**: Add Builder.io API key to HTML files
5. **Deploy**: Serve from public directory

## 8. Troubleshooting

### Common Issues

**Build fails with CSS errors:**
- Ensure Tailwind CSS is properly configured
- Check that `tailwind.config.js` is present

**Builder.io content not loading:**
- Verify API key is correctly set
- Check browser console for errors
- Ensure Builder.io content paths match HTML attributes

**404 errors on page navigation:**
- Vercel configuration should handle routing automatically
- Check that all HTML files are in the correct directories

### Debug Commands

```bash
# Test build locally
npm run build

# Preview built site locally
npm run preview

# Check environment variables
vercel env ls
```

## 9. Monitoring and Analytics

Consider adding:
- Vercel Analytics for performance monitoring
- Google Analytics for user tracking
- Builder.io Analytics for content performance

## 10. Continuous Deployment

Once connected to GitHub:
- Pushes to main branch automatically deploy to production
- Pull requests create preview deployments
- Environment variables are automatically injected

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Builder.io Documentation**: [builder.io/docs](https://builder.io/docs)
- **Project Issues**: Create an issue in the GitHub repository

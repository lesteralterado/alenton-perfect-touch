#!/bin/bash

# 🚀 GitHub Pages Deployment Script for Alenton Perfect Touch
# This script helps you deploy the portfolio to GitHub Pages

echo "🎨 Alenton Perfect Touch - GitHub Pages Deployment"
echo "=================================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial portfolio deployment"
else
    echo "✅ Git repository already initialized"
fi

# Ask for repository details
echo ""
echo "📋 Repository Information:"
read -p "Enter your GitHub username/organization: " GITHUB_USER
read -p "Enter repository name: " REPO_NAME

# Set up remote origin
REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
echo "🔗 Setting up remote origin: $REPO_URL"
git remote add origin $REPO_URL 2>/dev/null || git remote set-url origin $REPO_URL

# Update Vite config for repository
echo "⚙️  Configuring Vite for repository: $REPO_NAME"
sed -i "s|base: process.env.NODE_ENV === 'production' ? './' : '/'|base: '/$REPO_NAME/'|" vite.config.js

# Commit configuration changes
git add .
git commit -m "Configure for GitHub Pages deployment"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Deployment initiated!"
echo ""
echo "📋 Next Steps:"
echo "1. Go to https://github.com/$GITHUB_USER/$REPO_NAME"
echo "2. Navigate to Settings → Pages"
echo "3. Under 'Source', select 'GitHub Actions'"
echo "4. Wait 2-3 minutes for deployment to complete"
echo "5. Your site will be live at: https://$GITHUB_USER.github.io/$REPO_NAME"
echo ""
echo "🔧 Optional: For custom domain, add your domain in Settings → Pages → Custom domain"
echo "📄 Don't forget to update the README.md with your repository information!"
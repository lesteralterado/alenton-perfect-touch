@echo off
REM 🚀 GitHub Pages Deployment Script for Alenton Perfect Touch (Windows)
REM This script helps you deploy the portfolio to GitHub Pages

echo 🎨 Alenton Perfect Touch - GitHub Pages Deployment
echo ==================================================

REM Check if git is initialized
if not exist ".git" (
    echo 📝 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial portfolio deployment"
) else (
    echo ✅ Git repository already initialized
)

REM Ask for repository details
echo.
echo 📋 Repository Information:
set /p GITHUB_USER="Enter your GitHub username/organization: "
set /p REPO_NAME="Enter repository name: "

REM Set up remote origin
set REPO_URL=https://github.com/%GITHUB_USER%/%REPO_NAME%.git
echo 🔗 Setting up remote origin: %REPO_URL%
git remote add origin %REPO_URL% 2>nul || git remote set-url origin %REPO_URL%

REM Update Vite config for repository
echo ⚙️  Configuring Vite for repository: %REPO_NAME%
powershell -Command "(Get-Content vite.config.js) -replace 'base: process.env.NODE_ENV === ''production'' \? ''\./'' : ''/''', 'base: ''/%REPO_NAME%/''' | Set-Content vite.config.js"

REM Commit configuration changes
git add .
git commit -m "Configure for GitHub Pages deployment"

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ✅ Deployment initiated!
echo.
echo 📋 Next Steps:
echo 1. Go to https://github.com/%GITHUB_USER%/%REPO_NAME%
echo 2. Navigate to Settings → Pages
echo 3. Under 'Source', select 'GitHub Actions'
echo 4. Wait 2-3 minutes for deployment to complete
echo 5. Your site will be live at: https://%GITHUB_USER%.github.io/%REPO_NAME%
echo.
echo 🔧 Optional: For custom domain, add your domain in Settings → Pages → Custom domain
echo 📄 Don't forget to update the README.md with your repository information!

pause
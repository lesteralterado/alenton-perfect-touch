#!/usr/bin/env node

/**
 * Build Test Script for GitHub Pages Deployment
 * This script helps verify that the build is working correctly
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Testing Build for GitHub Pages Deployment...\n');

// Clean previous build
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  console.log('🧹 Cleaning previous build...');
  fs.rmSync(distPath, { recursive: true, force: true });
}

// Install dependencies
console.log('📦 Installing dependencies...');
try {
  execSync('npm ci', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Failed to install dependencies');
  process.exit(1);
}

// Build the project
console.log('🔨 Building project...');
try {
  execSync('npm run build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
      GITHUB_REPOSITORY: 'test-user/test-repo' // Test repository name
    }
  });
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// Check build output
console.log('🔍 Checking build output...');

if (!fs.existsSync(distPath)) {
  console.error('❌ dist folder not found');
  process.exit(1);
}

const indexPath = path.join(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ dist/index.html not found');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf8');

// Check for correct asset paths
const assetRegex = /\/test-repo\/assets\//g;
const hasCorrectPaths = assetRegex.test(indexContent);

if (hasCorrectPaths) {
  console.log('✅ Asset paths are correct');
} else {
  console.log('⚠️  Asset paths might need adjustment');
  console.log('Current paths in index.html:');
  const assetMatches = indexContent.match(/src="[^"]*"/g) || [];
  assetMatches.forEach(match => console.log(`  ${match}`));
}

// Check file sizes
const assetsDir = path.join(distPath, 'assets');
if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  console.log(`📊 Build output: ${files.length} asset files`);

  files.forEach(file => {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(`  ${file}: ${sizeKB} KB`);
  });
}

console.log('\n✅ Build test completed successfully!');
console.log('🚀 Ready for GitHub Pages deployment');
console.log('\nNext steps:');
console.log('1. Commit and push your changes');
console.log('2. Enable GitHub Pages in repository settings');
console.log('3. Your site will be live at: https://username.github.io/repository-name');
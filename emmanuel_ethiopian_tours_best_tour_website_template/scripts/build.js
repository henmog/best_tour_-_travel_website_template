#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get environment variables
const builderPublicKey = process.env.BUILDER_PUBLIC_KEY || 'YOUR_API_KEY_HERE';

console.log('🏗️  Building Emmanuel Ethiopian Tours...');

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
}

// Copy static files
console.log('📁 Copying static files...');
fs.copyFileSync('index.html', 'public/index.html');

// Copy pages directory
if (fs.existsSync('pages')) {
    fs.cpSync('pages', 'public/pages', { recursive: true });
}

// Copy CSS directory (already compiled by tailwind)
if (fs.existsSync('css')) {
    fs.cpSync('css', 'public/css', { recursive: true });
}

// Copy manifest if it exists
if (fs.existsSync('public/manifest.json')) {
    // manifest.json is already in public, no need to copy
    console.log('📱 Manifest file found');
}

// Inject environment variables into HTML files
console.log('🔧 Injecting environment variables...');

function injectEnvVars(filePath) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Add script to inject environment variables
        const envScript = `
    <script>
        window.BUILDER_PUBLIC_KEY = '${builderPublicKey}';
    </script>`;
        
        // Insert before the Builder.io SDK script
        content = content.replace(
            '    <!-- Builder.io SDK -->',
            `${envScript}
    <!-- Builder.io SDK -->`
        );
        
        fs.writeFileSync(filePath, content);
        console.log(`✅ Environment variables injected into ${filePath}`);
    }
}

// Inject into main files
injectEnvVars('public/pages/homepage.html');
injectEnvVars('public/index.html');

// Process all HTML files in pages directory
if (fs.existsSync('public/pages')) {
    const pageFiles = fs.readdirSync('public/pages');
    pageFiles.forEach(file => {
        if (file.endsWith('.html')) {
            injectEnvVars(`public/pages/${file}`);
        }
    });
}

console.log('✨ Build completed successfully!');
console.log('📦 Output directory: public/');
console.log(`🔑 Builder.io API Key: ${builderPublicKey === 'YOUR_API_KEY_HERE' ? '⚠️  Not configured' : '✅ Configured'}`);

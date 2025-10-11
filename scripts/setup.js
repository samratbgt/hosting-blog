#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up HostingHub project...\n');

// Create directories if they don't exist
const directories = [
  'public/images/logos',
  'content/comparisons',
  'content/guides',
];

directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Create .env.local from .env.example if it doesn't exist
const envExample = path.join(process.cwd(), '.env.example');
const envLocal = path.join(process.cwd(), '.env.local');

if (fs.existsSync(envExample) && !fs.existsSync(envLocal)) {
  fs.copyFileSync(envExample, envLocal);
  console.log('✅ Created .env.local from .env.example');
}

// Create placeholder logo files
const logoPlaceholders = [
  'bluehost.png',
  'hostinger.png', 
  'siteground.png',
  'dreamhost.png',
  'a2hosting.png'
];

logoPlaceholders.forEach(logo => {
  const logoPath = path.join(process.cwd(), 'public/images/logos', logo);
  if (!fs.existsSync(logoPath)) {
    // Create a simple placeholder file
    fs.writeFileSync(logoPath, '# Placeholder for ' + logo);
    console.log(`✅ Created placeholder: public/images/logos/${logo}`);
  }
});

console.log('\n🎉 Setup complete! Next steps:');
console.log('1. Run "npm install" to install dependencies');
console.log('2. Run "npm run dev" to start the development server');
console.log('3. Add your hosting provider logos to public/images/logos/');
console.log('4. Customize the affiliate links in lib/affiliates.ts');
console.log('5. Add more content to the content/ directories');
console.log('\n📚 Check the README.md for detailed documentation');

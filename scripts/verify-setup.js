const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packages = [
  '@zarclays/zswap-tines',
  '@zarclays/zswap-core-sdk',
  '@zarclays/zswap-trident-sdk'
];

console.log('🔍 Verifying monorepo setup...');

// 1. Check if all packages exist
console.log('\n📦 Checking package directories...');
packages.forEach(pkg => {
  const pkgPath = path.join('packages', pkg.split('/')[1]);
  if (fs.existsSync(pkgPath)) {
    console.log(`✅ Found ${pkg} at ${pkgPath}`);
  } else {
    console.error(`❌ Missing package: ${pkg}`);
    process.exit(1);
  }
});

// 2. Check workspace dependencies
console.log('\n🔗 Checking workspace dependencies...');
const rootPackage = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (!rootPackage.workspaces) {
  console.error('❌ Workspaces not configured in root package.json');
  process.exit(1);
}
console.log('✅ Workspaces configured correctly');

// 3. Check build
console.log('\n🔨 Building packages...');
try {
  execSync('yarn build:ordered', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

console.log('\n🎉 Verification complete! Your monorepo is properly set up.');
console.log('\nNext steps:');
console.log('1. Commit all changes');
console.log('2. To make changes and publish:');
console.log('   - Make your code changes');
console.log('   - Run `yarn changeset` to create a new changeset');
console.log('   - Run `yarn version-packages` to update versions');
console.log('   - Run `yarn release` to publish all changed packages');

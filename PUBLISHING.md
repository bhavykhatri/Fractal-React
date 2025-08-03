# NPM Publishing Guide for fractal-react

## Prerequisites ✅ (COMPLETED)
- [x] Package is built successfully
- [x] Package name `fractal-react` is available
- [x] All files are properly structured
- [x] Test package created successfully

## Steps to Publish

### 1. Create NPM Account (if needed)
```bash
# Visit https://www.npmjs.com/signup to create an account
# Or if you have one, proceed to step 2
```

### 2. Login to NPM
```bash
npm login
# Enter your credentials:
# - Username: bhavykhatri (or your npm username)
# - Password: (your password)
# - Email: (your email)
# - One-time password: (if 2FA enabled)
```

### 3. Verify Login
```bash
npm whoami
# Should show your username
```

### 4. Publish the Package
```bash
# For public packages (not scoped)
npm publish

# Or if you want to publish as a beta/prerelease
npm publish --tag beta
```

### 5. Verify Publication
```bash
# Check your package on npm
npm view fractal-react

# Or visit: https://www.npmjs.com/package/fractal-react
```

## After Publishing

### Test Installation
```bash
# In a different directory, test installing your package
npm install fractal-react
```

### Update Version for Future Releases
```bash
# For patch releases (0.1.1)
npm version patch

# For minor releases (0.2.0) 
npm version minor

# For major releases (1.0.0)
npm version major

# Then publish again
npm publish
```

## Usage Example
After publishing, users can install and use your package like this:

```bash
npm install fractal-react
```

```tsx
import { MandelbrotSet, JuliaSet, KochCurve } from 'fractal-react';

function App() {
  return (
    <div>
      <MandelbrotSet width={400} height={400} />
      <JuliaSet width={400} height={400} c={{ real: -0.7, imaginary: 0.27015 }} />
      <KochCurve width={400} height={400} iterations={4} />
    </div>
  );
}
```

## Package Details
- **Name**: fractal-react
- **Version**: 0.1.0
- **Size**: ~102.6 kB
- **Files**: 19 files including source maps and TypeScript definitions
- **Dependencies**: React 16.8+ required as peer dependency

## Commands Summary
```bash
# Login (one-time setup)
npm login

# Publish
npm publish

# Update and republish
npm version patch
npm publish
```

Good luck with your package! 🚀

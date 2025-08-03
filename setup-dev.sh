#!/bin/bash

echo "Setting up Fractal React Components development environment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the package
echo "Building the package..."
npm run build

# Run tests
echo "Running tests..."
npm test

# Start Storybook for development
echo "Starting Storybook..."
echo "You can now develop and test components in Storybook"
echo "Visit http://localhost:6006 to view the components"

npm run storybook

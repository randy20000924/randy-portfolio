#!/bin/bash

# Add all files to staging
git add .

# Commit changes with a message
git commit -m "append hover of btn"

# Push changes to the main branch
git push -u origin main

# Run the deployment command using npm
npm run deploy

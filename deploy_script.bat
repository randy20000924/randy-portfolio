@echo off

git add .

git commit -m "append hover of btn"

git push -u origin main

npm run deploy

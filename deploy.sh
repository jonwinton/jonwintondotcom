#!/bin/bash

cd _site;
touch .nojekyll;
git init;
git remote add origin https://github.com/jonwinton/jonwinton.github.io.git;
git fetch;
git push origin --delete master;
git checkout master;
git add -A;
git commit -m "Deploying";
git push origin master;
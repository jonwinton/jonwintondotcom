#!/bin/bash

cd _site;
touch .nojekyll;
git init;

git config user.name "Jon Winton"
git config user.email "winton.jon@gmail.com"

git remote add origin git@github.com:jonwinton/jonwinton.github.io.git;
git checkout master;
git/ add -A;
git commit -m "Deploying";
git push origin master;
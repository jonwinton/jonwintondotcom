#!/bin/bash

echo 'RUN DEPLOY';
if [[ $TRAVIS_BRANCH == 'deploy' ]] ; then
    echo 'DEPLOYING!!!!'
    cd _site
    touch .nojekyll
    git init

    git config user.name "Jon Winton"
    git config user.email "winton.jon@gmail.com"

    git remote add origin git@github.com:jonwinton/jonwinton.github.io.git
    git checkout master
    git add -A
    git commit -m "Deploying"

    # We redirect any output to
    # /dev/null to hide any sensitive credential data that might otherwise be exposed.
    git push --force --quiet "https://${git_user}:${git_password}@${git_target}" master:master > /dev/null 2>&1
else
  echo 'Invalid branch. You can only deploy from deploy.'
  exit 1
fi
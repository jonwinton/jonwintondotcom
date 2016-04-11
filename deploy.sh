#!/bin/bash

branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,');
echo $branch;


if [ "$branch" == "master" ]; then
    gulp styles;
fi
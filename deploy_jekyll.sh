#!/usr/bin/env bash
rsync -e "ssh -p 7777" -avz --delete jekyll/_site/ root@198.199.119.82:/d/bb/thomasarni.com/website/

#!/usr/bin/env bash

version=$(git rev-parse --short HEAD)

outFile=/tmp/tag-index.$$

sed "s/#VERSION#/$version/" resources/public/index-template.html > $outFile

mv $outFile resources/public/index.html


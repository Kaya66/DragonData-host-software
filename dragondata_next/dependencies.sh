#!/bin/bash
#Setup script
# NPM must be installed 
FILE=/usr/bin/node
if test -f "$FILE"; then
echo "$FILE exists."; else
echo "Node does not exist."
echo "Please insdall Node/npm to proceed"

sudo npm install

#!/bin/bash
#Setup script for debian based linux systems
# NPM must be installed 
sudo npm install node mysql2 sequelize express
sudo npm audit
sudo npm audit fix
#dotenv removed

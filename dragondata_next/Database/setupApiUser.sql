-- Change user login info. do (NOT) use the default in production. 

CREATE USER IF NOT EXISTS '@API_USER'@'192.168.%' IDENTIFIED BY '@API_PASSWORD';
GRANT ALL privileges ON DragonData.* TO '@API_USER'@'192.168.%';
FLUSH privileges;

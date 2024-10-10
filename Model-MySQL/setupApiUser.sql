CREATE USER IF NOT EXISTS 'ApiUser'@'192.168.%' IDENTIFIED BY '@piUs3rP@ssw0rd';
GRANT ALL privileges ON ACore.* TO 'ApiUser'@'192.168.%';
FLUSH privileges;
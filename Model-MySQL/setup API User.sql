CREATE USER 'ApiUser'@'192.168.%' IDENTIFIED BY '@piUs3rP@ssw0rd';
GRANT ALL privileges ON A_Core_Language.* TO 'ApiUser'@'%';
FLUSH privileges;
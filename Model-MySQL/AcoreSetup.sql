DROP DATABASE IF EXISTS ACore;
CREATE DATABASE ACore;
CREATE TABLE ACore.words (
  word VARCHAR(255) NOT NULL,
  english_word VARCHAR(255),
  definition VARCHAR(255) NOT NULL,
  pos ENUM('verb', 'noun', 'adjective', 'adverb', 'interjection')
);

DROP DATABASE IF EXISTS Auth;
CREATE DATABASE Auth;
CREATE TABLE Auth.logins (
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
)
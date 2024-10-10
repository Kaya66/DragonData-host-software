Drop database A_Core_Language;

DROP DATABASE ACore;
CREATE DATABASE ACore;
CREATE TABLE ACore.words (
  word VARCHAR(255) NOT NULL,
  english_word VARCHAR(255),
  definition VARCHAR(255) NOT NULL,
  pos ENUM('verb', 'noun', 'adjective', 'adverb', 'interjection')
);

--DROP TABLE IF EXISTS Alphabet;

CREATE DATABASE Auth;
CREATE TABLE Auth.logins (
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
)
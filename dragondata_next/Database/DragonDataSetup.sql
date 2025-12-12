DROP DATABASE IF EXISTS DragonData;
CREATE DATABASE DragonData;
USE DragonData;
CREATE TABLE Data (
  url VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);

DROP DATABASE IF EXISTS Auth;
CREATE DATABASE Auth;
USE Auth;
CREATE TABLE logins (
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  APIKey VARCHAR(255) NOT NULL -- This needs to be auto gen'd with new accounts
);

DROP DATABASE IF EXISTS DragonData;
CREATE DATABASE DragonData;
CREATE TABLE DragonData.Data (
  url VARCHAR(255) NOT NULL,
  description VARCHAR(255),
);

DROP DATABASE IF EXISTS Auth;
CREATE DATABASE Auth;
CREATE TABLE Auth.logins (
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  APIKey VARCHAR(255) NOT NULL, -- This needs to be auto gen'd with new accounts
)
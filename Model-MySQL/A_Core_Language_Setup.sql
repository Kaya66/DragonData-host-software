Drop database A_Core_Language;
create database A_Core_Language;
use A_Core_Language;
create Table Dictionary (
A_Core_Word varchar(255) not null,
Eng_Word varchar(255),
Word_Definition varchar(255) not null,
Part_Of_Speech varchar(255)
);
create table Alphabet (
A_Core_Letter varchar(255) not null,
Romanization varchar(255),
Phoneme varchar(255) not null,
Wiki varchar(9999)
);
Create database Users;
use Users;
create table Login(
Username varchar(255) not null,
passwd varchar(255) not null
)
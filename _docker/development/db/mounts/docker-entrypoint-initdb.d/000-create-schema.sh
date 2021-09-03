#!/usr/bin/env bash

mysql -u root -p"${MYSQL_ROOT_PASSWORD}" <<<"CREATE DATABASE IF NOT EXISTS family_backer;"

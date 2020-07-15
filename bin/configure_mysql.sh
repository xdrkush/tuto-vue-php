#!/bin/bash

export PGPASSWORD="arinfo"
database="tutoVuePhpMysql"

echo "configurating database $database"

dropdb -U arinfo tutoVuePhpMysql
createdb -U arinfo tutoVuePhpMysql

psql -U arinfo tutoVuePhpMysql < ./bin/sql/tuto-vue-php-mysql.sql

echo "$database configured"
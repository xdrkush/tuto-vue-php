#!/bin/bash

export PGPASSWORD="arinfo"
database="tuto-vue-php-psql"

echo "configurating database $database"

dropdb -U arinfo tuto-vue-php-psql
createdb -U arinfo tuto-vue-php-psql

psql -U arinfo tuto-vue-php-psql < ./bin/sql/tuto-vue-php-psql.sql

echo "$database configured"
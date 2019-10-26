#!/bin/sh

printf "Running linux?[Y/n]:"
read choice
if [ $choice = 'y' ] || [ $choice = 'Y' ]; then
	sudo -u postgres createuser -s $(whoami); createdb $(whoami)
	psql -c "create user hack_the_burgh_user with password 'lospolloshermanos';"
	psql -c "create database hack_the_burgh_db;"
	psql -c "grant all privileges on database hack_the_burgh_db to hack_the_burgh_user;"
else
	psql -c "create user hack_the_burgh_user with password 'lospolloshermanos';"
	psql -c "create database hack_the_burgh_db;"
	psql -c "grant all privileges on database hack_the_burgh_db to hack_the_burgh_user;"
fi

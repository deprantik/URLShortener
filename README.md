# URLShortener

Front end and api is combined in 1 repo, since it is a small project. For scalability we can break them into two microservices.

## Technology used

1. Next.js
2. Postgresql as database
3. pg-promise for database connection
4. redux for store management

## Basic setup

  ### Installing Node

  Make sure NodeJS version 10+ is installed on your machine.

    brew install node
    Installing nodemon

  We use nodemon to reload the site whenever changes are made locally.

    npm install -g nodemon

  ### Installing Node packages

  Once you have Postgres and Node, run these commands:

    yarn
    yarn dev

  ### Database setup:
  1. brew install postgresql
  2. g_ctl -D /usr/local/var/postgres start && brew services start postgresql
  3. psql postgres
  4. CREATE ROLE prantik_de WITH LOGIN PASSWORD 'qwertyuiop';
  5. ALTER ROLE prantik_de CREATEDB;
  6. \q
  7. psql postgres -U prantik_de
  8. CREATE DATABASE url_shortening_db;
  9. GRANT ALL PRIVILEGES ON DATABASE url_shortening_db TO prantik_de;
  10. \list
  11. \connect url_shortening_db
  12. \q

  ## Fill the database with tables

  npm run do-setup-database
  npm run do-seed-database

  ## View the website

  View http://localhost:5000 in your browser.

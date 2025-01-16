# Project Description

This Next.js project features two main forms and a subscription form. It utilizes MySQL as the database and Sequelize as the ORM. The project includes a server that can be run using Node.js and provides commands to generate tables in the database. The goal is to streamline form handling and database operations, ensuring data consistency across different environments.

Server running command:

- `npm run dev`

To generate the tables in the database, run:

- `node lib/syncDatabase.js`

Local database infos

DB_HOST = localhost
DB_USER = root
DB_PASS =
DB_NAME = embeddedexpert

server log check
cat ~/test.embeddedexpert.io/stderr.log

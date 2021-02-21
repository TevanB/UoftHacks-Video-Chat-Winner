var pg = require("pg");
var async = require("async");
var fs = require("fs");
const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000;
const config = {
    user: "maxroach",
    password: process.env.DB_PASS || "uoftuoftuoftuoft",
    host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
    database: 'klutzy-hare-869.defaultdb',
    port: 26257,
    ssl: {
        ca: fs.readFileSync('./server/cc-ca.crt').toString()
    }
};
var pool = new pg.Pool(config);
pool.connect(function (err, client, done) {

    // Close communication with the database and exit.
    var finish = function () {
        done();
        process.exit();
    };

    if (err) {
        console.error('could not connect to cockroachdb', err);
        finish();
    }
    async.waterfall([
            function (next) {
                // Create the 'accounts' table.
                client.query('CREATE TABLE IF NOT EXISTS accounts (id INT PRIMARY KEY, balance INT);', next);
            },
            function (results, next) {
                // Insert two rows into the 'accounts' table.
                client.query('INSERT INTO accounts (id, balance) VALUES (7, 1000), (8, 250);', next);
            },
            function (results, next) {
                // Print out account balances.
                client.query('SELECT id, balance FROM accounts;', next);
            },
        ],
        function (err, results) {
            if (err) {
                console.error('Error inserting into and selecting from accounts: ', err);
                finish();
            }

            console.log('Initial balances:');
            results.rows.forEach(function (row) {
                console.log(row);
            });

            finish();
        });
});

app.use(cors())
app.get('/createRoom', (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer b2cdec99c50a6846b778a2eb88f9cf4fd9a71cab07587a43771345911a730b43'
    },
    body: '{"properties":{"enable_chat":true}}'
  };
  
  fetch('https://api.daily.co/v1/rooms', options)
  .then(response => response.json())
  .then(api_res => res.send(api_res.url))
  .catch(err => console.error(err));
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
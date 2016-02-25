"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/Chinook_Sqlite.sqlite');


console.log(`Number of invoices per country`);
db.each(`SELECT COUNT(*) AS Count, BillingCountry AS Country FROM Invoice GROUP BY BillingCountry`, (err, results) => {
    if (err) throw err;
    console.log(results);
});

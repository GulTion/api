// import { JsonDB } from 'node-json-db';
// import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

const JsonDb = require('node-json-db');
const Config = require('node-json-db/dist/lib/JsonDBConfig');
const express = require('express');
const app = express();

var db = new JsonDb.JsonDB(new Config.Config("db", true, false, '/'));
db.push('/data',{data:["abc"]})
app.get('/', (req, res) => {
  db.push('/data',{data:[req.query.date]},false)
  console.log(req.query);
  res.send(db.getData('/data'));
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

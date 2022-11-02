// download tab separated values 
// from https://docs.google.com/spreadsheets/d/1boJQd3i-Le4roQgC_buQAJi5Fy2ebnC7fa4QA1L1vh8/edit#gid=650171096
// convert to results.json

// convert to json
// write to results.json

const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
// read tsv file "airbyte connectors by git start date - forapi.tsv"
const tsvFilePath = path.join(__dirname, 'airbyte connectors by git start date - forapi.tsv')
const jsonFilePath = path.join(__dirname, 'results.json')

// read file with tab separated values
const json = csv({ delimiter: '\t' }).fromFile(tsvFilePath)

json.then((jsonObj) => {
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj))
})

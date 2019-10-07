let csvToJson = require('convert-csv-to-json');

let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("/Users/anjalir/Downloads/amazonorder.csv");
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}

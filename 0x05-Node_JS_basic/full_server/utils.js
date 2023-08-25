const fs = require('fs');


export default function readDatabase(dbPath) {
     return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf-8', (error, data) => {
            if (error || !data) {
                return reject(new Error('Cannot load the database'));
            }
            const csvData = data.split('\n').map((item) => item.split('\r')[0]);
            let cols = csvData[0];
            const records = csvData.slice(1);
            cols = cols.split(',');

            // Transform csvDB to a JS supported data stricture; a list of Objects
            const recordsList = records.map((line) => {
                const record = {};
                const values = line.split(',');
                for (let i = 0; i < cols.length; i++) {
                    record[cols[i]] = values[i];
                }
                return record;
            });

            // create a field - list of students mapping for representation
            const fieldMap = {};
            for (const item of recordsList) {
                const group = fieldMap[item.field];
                if (!group) {
                    fieldMap[item.field] = [item.firstname];
                } else {
                    fieldMap[item.field].push(item.firstname);
                }
            }
            resolve(fieldMap);
        })
    })
}
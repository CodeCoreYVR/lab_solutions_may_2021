const data = require('./allCountries');
const knex = require('./migrations/client');
let allCountries = [];
for (const item of data) {
    // filter the data
    const check = allCountries.some((element) => element.name == item.countryName);
    if (!check) {
        allCountries.push({
            name: item.countryName,
            code: item.countryCode
        });
    }
}
// insert an array
knex("countries")
    .insert(allCountries)
    .returning('name', 'code')
    .then((data) => {
        console.log(data);
    });
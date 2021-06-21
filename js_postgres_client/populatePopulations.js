const knex = require('./migrations/client');
const seeds = require('./allCountries');
let populationsArr = [];
knex.select('id', 'name').from('countries').then(data => {
    for (const item of data) {
        for (const element of seeds) {
            if (element.countryName === item.name) {
                populationsArr.push({
                    year: element.year,
                    quantity: Math.floor(element.value),
                    country_id: item.id
                });
            }
        }
    }
    knex("populations")
        .insert(populationsArr)
        .returning('id', 'year', 'quantity', 'country_id')
        .then((data) => {
            console.log(data);
            knex.destroy();
        });
});
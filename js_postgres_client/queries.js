const knex = require('./migrations/client');
// Find all countries whose names begin with "b" ignoring case.
// select * from countries where "name" ilike 'b%'
const query1 = knex.select('*').from('countries').where('name', 'ilike', 'b%');
query1.then(data => {
    console.log(data);
})
// Count how many countries have "central" in their name.
// select count(*) from countries where "name" ilike '%central%'
const query2 = knex
    .count('* as count')
    .from('countries').where('name', 'ilike', '%central%');
query2.then(data => {
    console.log(data)
})
// Find all countries whose names begin with the same three letters as their code ignoring case.
// get the first 3 letters compare with the countries code 
// substring()
// _______
// ilike 
// combine the code column with a % then use ilike or like to check the name column
// select * from countries where "name" ilike "code" || '%'
const query3 = knex.select('*').from('countries').whereRaw(`name ilike "code" || '%'`);
query3.then(data => {
    console.log(data)
})
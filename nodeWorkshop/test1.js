const {readFileSync} = require('fs');
const load =()=> JSON.parse(readFileSync('temp.json'));
module.exports={load};
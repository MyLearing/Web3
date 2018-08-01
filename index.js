const express = require('express')
const app = express()
const Web3 = require('web3');
const web3 = new Web3();


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
    console.log(web3);
})
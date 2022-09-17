const express=require('express');
const {reset} = require('nodemon');

const app= express();

const PORT = process.env.PORT || 3000;

//set the view engine to ejs
//set ejs as view engine for express app
app.set('view engine','ejs');
app.use(express.static('public'))

app.get('/', (req,res)=> {
   
    res.render('home'); //renders the home.ejs file
})

app.get('/resume', (req,res)=> {

    res.render('resume'); //renders the home.ejs file
})

//
// //NEW ROUTE
// app.get('/',(req,res) => {
//     res.render('css');
// })
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

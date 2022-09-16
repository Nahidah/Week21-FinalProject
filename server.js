const express=require('express');
const app= express();

//set the view engine to ejs
//set ejs as view engine for express app
app.set('view engine','ejs');

app.get('/', (req,res)=> {
   
    res.render('home'); //renders the home.ejs file
})
app.listen(3000, () => console.log('Example app listening on port 3000!'));

//NEW ROUTE
app.get('/',(req,res) => {
    res.render('css');
})
app.listen(3000, () => console.log('Example app listening on port 3000!'));

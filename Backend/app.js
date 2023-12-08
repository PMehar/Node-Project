const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

var cors = require('cors');

const app = express();

app.use(cors());

const inventoryRoutes = require('./routes/inventory');

app.use(bodyParser.json({ extended: false}));

app.use('/inventory', inventoryRoutes);

sequelize
.sync()
.then(result =>{
    // console.log(result);
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
});
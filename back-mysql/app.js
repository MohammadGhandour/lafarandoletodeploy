const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const cors = require('cors');
const PORT = process.env.PORT || 2022;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', async (req, res) => {
    res.status(200).json({ message: "Hello from lafarandole backend" })
});

const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const customersRoutes = require('./routes/customersRoutes');

app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/customers', customersRoutes);

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
});

db.sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }).catch(err => {
        console.log('Couldnt connect to database');
        console.log(err);
    });

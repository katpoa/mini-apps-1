const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const cartSchema = new mongoose.Schema({

})

const Cart = mongoose.model('Cart', cartSchema);

// Cart.create
// Cart.find()

module.exports = Cart;
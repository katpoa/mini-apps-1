const express = require('express');
const { MongoClient } = require('mongodb');
// const db = require('../../database/index');

module.exports = {
  get: (callback) => {
    MongoClient.connect('mongodb://localhost:27017/shoppingcart',
      (err, database) => {
        const db = database.db('shoppingcart');
        db.collection('cart').find().toArray(callback)
      }
    )
  },

  post: (newItem, callback) => {
    db.cart.insertOne(
      {item: 'soap'}
    )
  }


}
const express = require('express');
const Cart = require('../../database/index');


module.exports = {
  get: (callback) => {
    Cart.find().exec(callback);
  },

  post: (field, newData, callback) => {
    Cart.create({field: `${newData}`}, callback);
  }


}
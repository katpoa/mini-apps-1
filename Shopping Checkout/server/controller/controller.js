const express = require('express');
const model = require('../model/model');

module.exports = {
  getAll: (req, res) => {
    model.get((err, data) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(data);
      }
    });
  },

  post: (req, res) => {
    model.post((err, data) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(data);
      }
    });
  }


}
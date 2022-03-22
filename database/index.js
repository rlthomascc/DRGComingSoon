require('dotenv').config();
//const mongoose = require('mongoose');
import mongoose from 'mongoose';

// dev

// process.env.mongourl
mongoose.connect(process.env.mongourl)
  .catch(err => console.log('Mongo connection error', err));


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

// schemas
const comingSoonSchema = ({
  address: String,
  desc: String,
  sqft: Number,
  bed: String,
  bath: String,
  photoLink: String,
  agent: String,
  price: String,
  year: Number,
  eta: String,
  premarket: String,
  status: String,
  timeStamp: { type: Date, default: Date.now },
})


// models
const ComingSoon = mongoose.model('ComingSoon', comingSoonSchema);

function save(e) {
  console.log(e, "SAVE FUNC");
  const obj = new ComingSoon({
    address: e.address,
    desc: e.desc,
    sqft: e.sqft,
    bed: e.bed,
    bath: e.bath,
    photoLink: e.photoLink,
    agent: e.agent,
    price: e.price,
    year: e.year,
    eta: e.eta,
    status: e.status,
    premarket: e.premarket
  })
  obj.save();
  console.log("Data saved to MongoDB Database");
}

const funcs = {
  save, ComingSoon,
};
module.exports = funcs;
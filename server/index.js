require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { MessagingResponse } = require('twilio').twiml; // TWILIO TEXT
const { VoiceResponse } = require('twilio').twiml; // TWILIO VOICE
const db = require('../database/index');



//const port = 3000;
const port = process.env.PORT || 3000;


const app = express();

//process.env.sid
//process.env.token
const client = require('twilio')(
  process.env.sid, //sid
  process.env.token, // TOKEN
);




app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const sms = (title, data) => {
  //randy
  client.messages
    .create({
      body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12094817096',
    })
    .then(message => console.log(message.sid));
    
    //don
    client.messages
    .create({
      body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12094958907',
    })
    .then(message => console.log(message.sid));

    //michael
    client.messages
    .create({
      body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12093248726',
    })
    .then(message => console.log(message.sid));

    //carlos
    client.messages
    .create({
      body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12096147580',
    })
    .then(message => console.log(message.sid));

    //andy
    client.messages
    .create({
      body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12092043963',
    })
    .then(message => console.log(message.sid));

//patty
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12094806005',
})
.then(message => console.log(message.sid));

//amanda
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12099888498',
})
.then(message => console.log(message.sid));

//jennifer
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12096107070',
})
.then(message => console.log(message.sid));

//daniel
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12092040610',
})
.then(message => console.log(message.sid));

//matt foster
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12099863492',
})
.then(message => console.log(message.sid));

//jared howell
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+17134473080',
})
.then(message => console.log(message.sid));

//jennapher bell
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12096621629',
})
.then(message => console.log(message.sid));

//nathan steingrebe
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12092477863',
})
.then(message => console.log(message.sid));

//Eddie Sanchez
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12094999535',
})
.then(message => console.log(message.sid));

//james garcia
client.messages
.create({
  body: `${title}

Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12094844990',
})
.then(message => console.log(message.sid));


//ellie
client.messages
.create({
  body: `${title}
  
Address: ${data.address} 

Description / Show Notes: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Status: ${data.status}

Offer Premarket: ${data.premarket}
  
  Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12093032432',
})
.then(message => console.log(message.sid));

};

app.post('/addlisting', (req, res) => {
  var e = req.body
  db.save({
    address: e.address,
    desc: e.desc,
    sqft: e.sqft,
    bed: e.bed,
    bath: e.bath,
    photoLink: e.photoLink,
    price: e.price,
    year: e.year,
    agent: e.agent,
    status: e.status,
    eta: e.eta,
    premarket: e.premarket
  })
  sms("NEW COMING SOON ALERT!",{
    address: e.address,
    desc: e.desc,
    sqft: e.sqft,
    bed: e.bed,
    bath: e.bath,
    photoLink: e.photoLink,
    price: e.price,
    year: e.year,
    agent: e.agent,
    status: e.status,
    eta: e.eta,
    premarket: e.premarket
  })
  res.sendStatus(200);
}) 

app.get("/getlistings", (req, res) => {
  db.ComingSoon.find().exec((err, data) => {
    res.send(data); 
  })
})

app.post("/editlisting", (req, res) => {
  var e = req.body;
  console.log(e, 'BODY INCOMING');
  db.ComingSoon.deleteOne({ _id: req.body._id }).then((err, data) => {
    res.send(data);
  })
  db.save({
    address: e.address,
    desc: e.desc,
    sqft: e.sqft,
    bed: e.bed,
    bath: e.bath,
    photoLink: e.photoLink,
    price: e.price,
    year: e.year,
    agent: e.agent,
    status: e.status,
    eta: e.eta,
    premarket: e.premarket
  })
  sms("UPDATED COMING SOON INFO", {
    address: e.address,
    desc: e.desc,
    sqft: e.sqft,
    bed: e.bed,
    bath: e.bath,
    photoLink: e.photoLink,
    price: e.price,
    year: e.year,
    agent: e.agent,
    status: e.status,
    eta: e.eta,
    premarket: e.premarket
  })
  res.sendStatus(200);
})

app.post('/deletelisting', (req, res) => {
  console.log(req.body.id)
  db.ComingSoon.deleteOne({ _id: req.body.id }).then((err, data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

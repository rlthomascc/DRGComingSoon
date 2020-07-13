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


const client = require('twilio')(
  process.env.sid, //sid
  process.env.token, // TOKEN
);


app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const sms = (data) => {
  //randy
  client.messages
    .create({
      body: `NEW COMING SOON ALERT!

Address: ${data.address} 

Description: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12094817096',
    })
    .then(message => console.log(message.sid));
    
    //don
    client.messages
    .create({
      body: `NEW COMING SOON ALERT!

Address: ${data.address} 

Description: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12094958907',
    })
    .then(message => console.log(message.sid));

    //michael
    client.messages
    .create({
      body: `NEW COMING SOON ALERT!

Address: ${data.address} 

Description: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12093248726',
    })
    .then(message => console.log(message.sid));

    //carlos
    client.messages
    .create({
      body: `NEW COMING SOON ALERT!

Address: ${data.address} 

Description: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12096147580',
    })
    .then(message => console.log(message.sid));

    //andy
    client.messages
    .create({
      body: `NEW COMING SOON ALERT!

Address: ${data.address} 

Description: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Agent: ${data.agent}`,
      from: '+12092555830',
      to: '+12092043963',
    })
    .then(message => console.log(message.sid));

//patty
client.messages
.create({
  body: `NEW COMING SOON ALERT!

Address: ${data.address} 

Description: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12094806005',
})
.then(message => console.log(message.sid));

//amanda
client.messages
.create({
  body: `NEW COMING SOON ALERT!

Address: ${data.address} 

Description: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12099888498',
})
.then(message => console.log(message.sid));

//jennifer
client.messages
.create({
  body: `NEW COMING SOON ALERT!

Address: ${data.address} 

Description: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12096107070',
})
.then(message => console.log(message.sid));

//daniel
client.messages
.create({
  body: `NEW COMING SOON ALERT!

Address: ${data.address} 

Description: ${data.desc}

SqFt: ${data.sqft} 

ETA: ${data.eta}

Bed: ${data.bed} | Bath: ${data.bath}

Photos: ${data.photoLink}

Price: ${data.price}

Agent: ${data.agent}`,
  from: '+12092555830',
  to: '+12092040610',
})
.then(message => console.log(message.sid));


//ellie
client.messages
.create({
  body: `NEW COMING SOON ALERT!
  
  Address: ${data.address} 
  
  Description: ${data.desc}
  
  SqFt: ${data.sqft} 
  
  ETA: ${data.eta}
  
  Bed: ${data.bed} | Bath: ${data.bath}
  
  Photos: ${data.photoLink}
  
  Price: ${data.price}
  
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
    eta: e.eta
  })
  sms({
    address: e.address,
    desc: e.desc,
    sqft: e.sqft,
    bed: e.bed,
    bath: e.bath,
    photoLink: e.photoLink,
    price: e.price,
    year: e.year,
    agent: e.agent,
    eta: e.eta
  })
  res.sendStatus(200);
}) 

app.get("/getlistings", (req, res) => {
  db.ComingSoon.find().exec((err, data) => {
    console.log(data, 'LISTINGSSSSSS')
    res.send(data); 
  })
})

app.post('/deletelisting', (req, res) => {
  console.log(req.body.id)
  db.ComingSoon.find({ _id: req.body.id }).remove().exec((err, data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const express = require('express');
const app = express();
require('dotenv').config({path: __dirname + '/.env'})
const product = require('./api/product');
const axios = require('axios');

// Telegram Lib
const TelegramBot = require('node-telegram-bot-api');


app.use(express.json({extend:false}));

app.use("/api/product", product);
const PORT = process.env.PORT || 8080;



const token = process.env['BOT_TOKEN'];

const bot = new TelegramBot(token, {polling: true});
bot.sendMessage(1387941176, "Send");

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  console.log(msg);


  axios.get('https://api.wazirx.com/api/v2/tickers')
  .then(function (response) {

    // console.log(response.data['btcinr'].last);

    if(msg.text == 'dogeinr'){
      let CryptoData = `<b>Doge Todays Price</b> \n <b>Current Price:- </b>${response.data['dogeinr'].last}₹ \n <b>High Price:- </b>${response.data['dogeinr'].high}₹ \n <b>Low Price:- </b>${response.data['dogeinr'].low}₹ \n`;

      bot.sendMessage(chatId, CryptoData, {parse_mode : "HTML"});
    }
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
});



app.listen(PORT, ()=> console.log('Server Running at '+PORT));





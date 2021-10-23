const express = require('express');
const app = express();
require('dotenv').config({path: __dirname + '/.env'})
const product = require('./api/product');

// Telegram Lib
const { Telegraf } = require('telegraf');
const TelegramBot = require('node-telegram-bot-api');


app.use(express.json({extend:false}));

app.use("/api/product", product);
const PORT = process.env.PORT || 8080;

// Telegraf Lib Demo
// const bot = new Telegraf(process.env['BOT_TOKEN'])
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.launch()





app.listen(PORT, ()=> console.log('Server Running at '+PORT));





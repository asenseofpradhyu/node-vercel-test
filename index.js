const express = require('express');
const { Telegraf } = require('telegraf');
const app = express();
require('dotenv').config({path: __dirname + '/.env'})
const product = require('./api/product');


app.use(express.json({extend:false}));

// app.use("/api/product", product);
const PORT = process.env.PORT || 8080;


const bot = new Telegraf(process.env['BOT_TOKEN'])
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

app.listen(PORT, ()=> console.log('Server Running at '+PORT));
require('dotenv').config()
const { Telegraf } = require('telegraf');
const { greetingMsg } = require('./constant/messages');

const { BOT_TOKEN } = process.env

if(!BOT_TOKEN){
    console.log('Please insert bot token!');
    return
}

const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => greetingMsg(ctx))

bot.launch()
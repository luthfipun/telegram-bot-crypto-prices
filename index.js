require('dotenv').config()
const { Telegraf } = require('telegraf');
const { greetingMsg } = require('./constant/messages');
const { inlineSearchCoin } = require('./service/search');

const { BOT_TOKEN } = process.env

if(BOT_TOKEN === undefined){
    throw new Error('Please insert bot token!')
}

const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => greetingMsg(ctx))
bot.on('inline_query', async (ctx) => await inlineSearchCoin(ctx))

bot.launch()
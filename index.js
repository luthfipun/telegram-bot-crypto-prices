require('dotenv').config()
const { Telegraf } = require('telegraf');
const { greetingMsg, aboutMsg, helpMsg } = require('./constant/messages');
const actionFetchPrice = require('./service/prices');
const { inlineSearchCoin } = require('./service/search');

const { BOT_TOKEN } = process.env

if(BOT_TOKEN === undefined){
    throw new Error('Please insert bot token!')
}

const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => greetingMsg(ctx))
bot.on('inline_query', async (ctx) => await inlineSearchCoin(ctx))
bot.action(/.+/, async (ctx) => await actionFetchPrice(ctx))
bot.command('tentang', (ctx) => aboutMsg(ctx))

bot.launch()
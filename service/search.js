const { Markup } = require('telegraf')
const { botName } = require('../constant/messages')
const data = require('../data/data.json')

const searchCoin = async (q) => {
    return await data.filter((value) => value.name.toLowerCase().includes(q.toLowerCase()))
}

const inlineSearchCoin = async (ctx) => {
    let query = ctx.inlineQuery.query

    if(!query){
        return
    }

    let coins = await (await searchCoin(query)).slice(0, 5)

    if(coins.length === 0){
        return
    }

    let result = coins.map(({id, description, url_logo_png, name, symbol}) => ({
        type: 'article',
        id: id,
        title: name,
        description: description,
        thumb_url: url_logo_png,
        input_message_content: {
            message_text: `${botName} <b>Detil Coin</b>\nNama Coin: <b>${name}</b>\nDeskripsi: <b>${description}</b>\nSimbol: <b>${symbol}</b>`,
            parse_mode: 'HTML'
        },
        reply_markup: {...Markup.inlineKeyboard([
            Markup.button.callback('Lihat Harga', id)
        ])}.reply_markup
    }))
    return await ctx.answerInlineQuery(result, {cache_time: 50})
}

module.exports = {
    inlineSearchCoin
}
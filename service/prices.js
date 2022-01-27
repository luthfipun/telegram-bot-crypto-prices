const fetchData = require(".")
const { PATH_PRICE } = require("../constant")
const { botName } = require("../constant/messages")
const data = require('../data/data.json')
const {currencyFormat, dateFormat} = require("../utils")

const getPrice = async (id) => {
    return await fetchData(PATH_PRICE + id)
}

const getCoinById = async (id) => {
    return await data.find((value) => value.id === id)
}

const actionFetchPrice = async (ctx) => {
    let id = ctx.match[0]

    let detail = await getCoinById(id)
    let price = await getPrice(id)
    let ticker = price.ticker

    let topMsg = `${botName} <b>Harga Coin</b>\nNama Coin: <b>${detail.name}</b>\n`
    let priceMsg = `Harga: <b>${currencyFormat(ticker.last, detail.base_currency)}</b>\nHarga Beli: <b>${currencyFormat(ticker.buy, detail.base_currency)}</b>\nHarga Jual: <b>${currencyFormat(ticker.sell, detail.base_currency)}</b>\nHarga Tertinggi 24h: <b>${currencyFormat(ticker.high, detail.base_currency)}</b>\nHarga Terendah 24h: <b>${currencyFormat(ticker.low, detail.base_currency)}</b>\n\nharga coin pada <i>${dateFormat(ticker.server_time*1000)}</i>`
    let message = topMsg + priceMsg

    let callback = ctx.update.callback_query
    let chatId = callback.from.id

    ctx.telegram.sendMessage(chatId, message, { parse_mode: 'HTML'})
    ctx.answerCbQuery('🥳')
}

module.exports = actionFetchPrice
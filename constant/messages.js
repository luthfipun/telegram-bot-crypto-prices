const { Markup } = require("telegraf")

const botName = `🤖 <b>:</b>`

const helpMsg = (ctx) => {
    let botUsername = ctx.botInfo.username
    return `Untuk mencari coin ketik <b>@${botUsername} <i>nama koin</i></b>`
}

const greetingMsg = (ctx) => {
    let user = ctx.update.message.from.first_name
    let msg = `${botName} Selamat datang, <b>${user}</b> 😊\n` + helpMsg(ctx)
    ctx.replyWithHTML(msg)
}

const aboutMsg = (ctx) => {
    let msg = botName + ' Bot ini free open source, jika ingin berkontribusi bisa cek di link berikut <b><a href="https://github.com/luthfipun/telegram-bot-crypto-prices">https://github.com/luthfipun/telegram-bot-crypto-prices</a></b>'
    ctx.reply(msg, {parse_mode: 'HTML',
        ...Markup.inlineKeyboard([
            Markup.button.url('Buka Github', 'https://github.com/luthfipun/telegram-bot-crypto-prices')
        ])
    })
}

module.exports = {
    botName,
    greetingMsg,
    aboutMsg
}
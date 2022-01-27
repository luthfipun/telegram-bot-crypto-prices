
const botName = `🤖 <b>:</b>`

const greetingMsg = (ctx) => {
    let user = ctx.update.message.from.first_name
    let botUsername = ctx.botInfo.username
    let msg = `${botName} Selamat datang, <b>${user}</b> 😊\nUntuk mencari coin ketik <b>@${botUsername} <i>nama koin</i></b>`
    ctx.replyWithHTML(msg)
}
module.exports = {
    greetingMsg,
    botName
}
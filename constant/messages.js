
const botName = `🤖 <b>:</b>`

const greetingMsg = (ctx) => {
    let user = ctx.update.message.from.first_name
    let botUsername = ctx.botInfo.username
    let msg = `${botName} <b>Selamat datang, <i>${user}</i> 😊</b>\nUntuk mencari coin silahkan ketik <b>/cari</b>\natau jika mau lebih mudah bisa ketik <b>@${botUsername} <i>nama koin</i></b>`
    ctx.replyWithHTML(msg)
}
module.exports = {
    greetingMsg
}
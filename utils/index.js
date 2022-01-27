const moment = require("moment")
moment.locale('id-ID')

const currencyFormat = (value, base) => {
    return new Intl.NumberFormat(base === 'idr' ? 'id-ID' : 'en-US', {
        style: 'currency',
        currency: base === 'idr' ? 'IDR' : 'USD'
    }).format(value)
}

const dateFormat = (date) => {
    return moment(date).format('llll')
}

module.exports = {
    currencyFormat,
    dateFormat
}
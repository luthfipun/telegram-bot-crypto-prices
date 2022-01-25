require('dotenv').config()
const Axios = require('axios')

const { BASE_URL } = process.env

const fetchData = async (path) => {

    if(!BASE_URL){
        return null
    }
    return await Axios(BASE_URL + path).then((response) => response.data)
}

module.exports = fetchData
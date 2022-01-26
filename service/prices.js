const fetchData = require(".")
const { PATH_PRICE } = require("../constant")


const fetchPrice = async (id) => {
    return await fetchData(PATH_PRICE + id)
}

module.exports = fetchPrice
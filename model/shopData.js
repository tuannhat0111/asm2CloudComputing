var pg_conn = require("./pg_config")

async function shopData(shopID)
{
    var shop_query = `SELECT * FROM shop Where id = '${shopID}'`;
      var query_data = await pg_conn.query(shop_query);
    console.log(query_data[0])

    return shopData;
}

module.exports = shopData;
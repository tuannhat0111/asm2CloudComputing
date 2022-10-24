var pg_conn = require("./pg_config")


async function get_data_account(shopid){

    if(shopid != null){
        var query = `SELECT * FROM product Where shopid = ${shopid}`;
    }
    else {
        var query = "SELECT * FROM account";
   
    }
    var data = await pg_conn.query(query);
   
        var query1 = `SELECT shopid FROM account`;
        var shopIdList = await pg_conn.query(query1);

   
    // let num_shop = data.rowCount;
    // let box_string = 
    // `<form action = "select_shop" method ="post">
    // <label for ="shop"> choose a shop:</label>
    // <select name ='shop' id = "shop_select">
    // <option value = 0 selected>all shop</option>
    // </select>
    // `

    // for (let i=0;i <num_shop;i++ )
    // {
    //     let shop_name = data.rows[i].shop_name
    //     let shop_id = data.rows[i].id
    //     box_string += `<option value =${shop_id} > ${shop_name}</option>`
    // }
    // box_string +=
    // `</selected>
    // <button type = "submit" value = "shop_select">viet</button>
    // </form>`
    return [data,shopIdList] ;
}
module.exports = get_data_account
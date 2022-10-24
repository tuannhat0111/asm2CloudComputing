

function select_box(){
    var shop_query = 
    var data = await pg_conn(shop_query)
    `<label for ="cars"> choose a shop:</label>
    <select name ='shop' id = "shop">
    <option value = "volvo">"Shop"</option>
    <option value = "mec">"mec"</options>
    <option value = "all" selected >allshop</options>
    </select>
    `
    return select_box;
}
module.exports = select_box;
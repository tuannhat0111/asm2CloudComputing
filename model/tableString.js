var shop = require('shopData')
var product = require('productData')


async function tableString(shop_id)
{
    let shopData = await shop(shop_id);
    let productData = await product(shop_id)

    var table_row = '';

    productData.forEach((product) =>{
        table_row += `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
        </tr>
        `
    })
    
    var table_string = `
    <h1>Shop id: ${shopData.id}, Name : ${shopData.name}, Address: ${shopData.address}, Contact: ${shopData.contact}</h1>

    <h2>Product</h2>
    <table>

    ${table_row}
    </table>
    `

    return
    
}

module.exports = tableString;
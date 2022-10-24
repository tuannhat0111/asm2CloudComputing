var express = require('express');
const deleteFunc = require('../model/deletedatabyaccount');
const insertFul = require('../model/setdatabyaccount');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('repond with a resource');
});
//DELETE
// router.post('/functions', async function(req, res, next) {
//   let product_id = req.body.id;
//   console.log(product_id);
//   deleteFunc(product_id);
//   var username='hieu';
//   let shop_id = req.body.id;
//   let table_string = await display_table(shop_id)
//   res.render('user',{title: "USER PAGE", name: username,table_string: table_string })
// });
//INSERT
// router.post('/insert', async function(req, res, next) {
//   let product_id = req.body.id;
//   console.log(product_id);
//   let shop_id = req.body.id;
//   let prodcut_name = req.body.name;
//   let price = req.body.price;
//   let quantity = req.body.quantity;
  
//   insertFul(product_id, prodcut_name, price, quantity, shop_id);
//   var username='hieu';
  
//   let table_string = await display_table(shop_id)
//   res.render('user',{title: "USER PAGE", name: username,table_string: table_string })
// });

module.exports = router;
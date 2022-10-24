var express = require('express');
var authen = require('../model/authenticator');
const get_data_account = require('../model/getdatabyaccount');
const set_data_account = require('../model/setdatabyaccount');
const deleteFunc = require('../model/deletedatabyaccount');

var router = express.Router();
var shopid ; 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',  function(req, res, next) {
  res.render('login', {  title: 'LOGIN PAGE' });
});


router.post('/login', async function(req, res, next) {
  console.log('username: ' + req.body.username)
  console.log('password: ' + req.body.password)
  const username = req.body.username;
  const password = req.body.password;
  const [authenticated,shop_id, role ] = await authen(username,password);
 shopid = shop_id;
  if(authenticated == true && role == "USER")
  {
    let [dataInDb, shopIdList] = await get_data_account(shop_id);
    res.render('user', {  title: 'USER PAGE', products : dataInDb.rows, shopid: shop_id});
  }
  else if (authenticated == true && role == "ADMIN")
  {    
    let [dataInDb, shopIdList] = await get_data_account(shop_id);
    // console.log(shopIdList);
    res.render('admin', {  title: 'ADMIN PAGES', data : dataInDb.rows, shopIdList: shopIdList.rows, products: null});
  }
  else
  {
    res.render('login', {  title: 'Login Page', notice: 'Wrong username or pass' });
  }
  
});

router.get('/createproduct/',  function(req, res, next) {
  res.render('createproduct', {  title: 'Create Product PAGE' });
});

router.post('/createproduct', async function(req, res, next) {
 
  var data = await set_data_account(req.body.nameproduct,parseInt(req.body.quantity), parseInt(req.body.price), req.body.description, parseInt(shopid));
  let [dataInDb, shopIdList] = await get_data_account(shopid);

  res.render('user', {  title: 'Hello',  products: dataInDb.rows});
});

router.post('/deleteproduct', async function(req, res, next) {
  console.log(req.body.idproduct);
  var data = await deleteFunc(parseInt(req.body.idproduct));
  let [dataInDb, shopIdList] = await get_data_account(shopid);

  res.render('user', {  title: 'Hello',  products: dataInDb.rows});
});
router.get('/getProductByShop',async  function(req, res, next) {
  // res.render('createproduct', {  title: 'Create Product PAGE' })
  
  let [dataInDb, shopIdList] = await get_data_account(req.query.Select_Shop);
  res.render('admin', {  title: 'Hello',  products: dataInDb.rows, shopIdList: shopIdList.rows, data : null});

});

module.exports = router;

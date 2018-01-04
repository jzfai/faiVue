/**
 * Created by fai on 2018/1/3.
 */
const mysql=require('mysql');

var pool=mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'faiVue',
  connectionLimit:5
});
module.exports=pool;


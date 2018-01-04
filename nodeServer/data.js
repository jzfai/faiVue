/**
 * Created by fai on 2018/1/3.
 */
const mysql=require('mysql');
const pool=require('./pool');

module.exports={
  slide:(req,res)=>{
    pool.getConnection((err,conn)=>{
      conn.query("SELECT * FROM v_slide",(err,data)=>{
        console.log(data);
        res.json(data);
        conn.release();
      });
    })
  },
  boardList(req,res){
    pool.getConnection((err,conn)=>{
      conn.query("SELECT * FROM v_boardList",(err,data)=>{
        console.log(data);
        res.json(data);
        conn.release();
      })
    });
  }
};

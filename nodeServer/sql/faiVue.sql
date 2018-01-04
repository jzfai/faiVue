SET NAMES UTF8;
DROP DATABASE IF EXISTS faiVue;
CREATE DATABASE faiVue CHARSET=UTF8;
use faiVue;

CREATE TABLE v_slide(
   sId INT PRIMARY KEY AUTO_INCREMENT,
   src  VARCHAR(200),
   title VARCHAR(200),
   href  VARCHAR(100)
);

INSERT INTO v_slide VALUES
(NULL,'../assets/slideShow/pic1.jpg','1','www.baidu.com'),
(NULL,'../assets/slideShow/pic2.jpg','2','www.baidu.com'),
(NULL,'../assets/slideShow/pic3.jpg','3','www.baidu.com'),
(NULL,'../assets/slideShow/pic4.jpg','4','www.baidu.com');

CREATE TABLE v_boardList(
  bId INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  detail VARCHAR(200),
  name  VARCHAR(200),
  toKey VARCHAR(100),
  saleout VARCHAR(100)
);

INSERT INTO v_boardList VALUES
(NULL,'开发产品','开放产品是一款开放产品','cart','analysis','false'),
(NULL,'品牌营销','品牌营销帮助你的产品更好地找到定位','earth','count','false'),
(NULL,'使命必达','品牌营销帮助你的产品更好地找到定位','loud','forecast','true'),
(NULL,'勇攀高峰','帮你勇闯高峰，到达事业的顶峰','hill','publish','false');

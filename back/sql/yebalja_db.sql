-- MySQL dump 10.13  Distrib 8.0.19, for osx10.15 (x86_64)
--
-- Host: localhost    Database: yebalja
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Create yebalja_db Database
--

DROP DATABASE IF EXISTS `yebalja_db`;

CREATE DATABASE `yebalja_db`;

USE `yebalja_db`;



--
-- Table structure for table `gisu_table`
--

DROP TABLE IF EXISTS `gisu_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gisu_table` (
  `gisu_id` int NOT NULL AUTO_INCREMENT,
  `program_id` int NOT NULL,
  `gisu_title` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gisu_start_date` date DEFAULT NULL,
  `gisu_end_date` date DEFAULT NULL,
  `gisu_recruit_start` date DEFAULT NULL,
  `gisu_recruit_end` date DEFAULT NULL,
  `gisu_compete_start` date DEFAULT NULL,
  `gisu_compete_end` date DEFAULT NULL,
  `gisu_learn_start` date DEFAULT NULL,
  PRIMARY KEY (`gisu_id`),
  KEY `program_id_idx` (`program_id`),
  CONSTRAINT `program_id` FOREIGN KEY (`program_id`) REFERENCES `program_table` (`program_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='프로그램에 따른 기수 정보를 갖는 테이블.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gisu_table`
--

LOCK TABLES `gisu_table` WRITE;
/*!40000 ALTER TABLE `gisu_table` DISABLE KEYS */;
INSERT INTO `gisu_table` VALUES (1,1,'1기 1차','2020-07-04','2020-07-04',NULL,NULL,NULL,NULL,NULL),(2,1,'1기 2차','2020-07-04','2020-07-04',NULL,NULL,NULL,NULL,NULL),(14,1,'13',NULL,NULL,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05'),(15,1,'13','2020-07-08',NULL,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05'),(20,1,'13',NULL,NULL,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05'),(21,1,'13',NULL,NULL,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05'),(22,1,'13',NULL,NULL,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05');
/*!40000 ALTER TABLE `gisu_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_table`
--

DROP TABLE IF EXISTS `member_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_table` (
  `member_id` int NOT NULL AUTO_INCREMENT,
  `member_login_nickname` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `member_login_pw` varchar(60) COLLATE utf8_bin NOT NULL,
  `member_login_email` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='로그인에 필요한 멤버정보들을 저장하는 테이블.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_table`
--

LOCK TABLES `member_table` WRITE;
/*!40000 ALTER TABLE `member_table` DISABLE KEYS */;
INSERT INTO `member_table` VALUES (1,'abcd','123','abcd@gmail.com'),(2,'aaa','123','aaa@gmail.com'),(5,'Mark','123','abcd1@gmail.com'),(6,'Mark11','123','abcd111@gmail.com'),(7,'Mark1111','123','abcd1111@gmail.com'),(8,'Mark11112','$2b$10$GKpZrD/dpUfpFuzZCe8iK.VqrFoTd.I8vh7zPHqXm3bxzdCCQh9h2','abcd11112@gmail.com'),(9,'1111Mark','$2b$10$TzCGAiv6al8Rve/13EvfLupavn4aQH51GrRh7uh8OwtX.xPwcUHj2','abc111d@gmail.com'),(10,'1111Mark22','$2b$10$Xx4fn4wjr.JQdT5gxn3oPuDkf5R5MvRiKk6qn9GTIAE1MqpxhASXC','abc11122d@gmail.com'),(11,'1111Mark2233','$2b$10$tgJlJJ35YFQD7rmv1QnDmeQMYdHMoEatJfRjF7hZW0L0V3ka8304G','abc1112332d@gmail.com'),(12,'1111Mark22332','$2b$10$oi17HO3kGyerI3bKFtCcZOL/JYit8QZXkHbv9Ag3DLOhXCFdDEZsO','1abc1112332d@gmail.com'),(13,'json','$2b$10$2l0o.eFqysvxS5Ep4cuJAONBBp8xnNVW2lYLi0wJZ3CunIDB0p9bK','jason@gmail.com'),(14,'Mark123123123','$2b$10$jlpgtKk1/XKVKCGPJjkA6uXnzGAIp1aAPN/TlGi6LdUhiP2N5HNH2','abcd3213213@gmail.com'),(15,'qqq','$2b$10$ZLG.yZUXMZH7Wrv.KtTZu.qdSKPDJNaUpUKNOzP5.TfWF8sH2P0lK','qqq@gmail.com'),(16,'Mark12231','$2b$10$/7GQOwybuceNTluqDQ/8WuxR7FIR.vghkQVjgVXB2IoMi6adsdBWC','123123@gmail.com'),(17,'Marksdfsdfsdfs','$2b$10$3iiBw0c6t7d0ruHD2OI47ei28vd/vFSBxYNm0.EfbbFdaRu4yrKNK','abcdsdfsdfsdf@gmail.com'),(19,'admin','$2b$10$AVyLbNp3cpzRBpkx0b94u.bvj6d1ZgPQvcnCA6LLomB2TR3fa5Pe6','admin@admin.com'),(20,'a','$2b$10$O4mutd8v.gkYC8y8w7se7.hcD4jUMsJo36ePsT2CmFywSDX5DcF8.','a@a.com'),(21,'Mark000','$2b$10$dRiT9dKondSToXWCNSCvz.Eu03f7ZwJOdLObXxw/dwbU/chXTVIE6','abcd000@gmail.com'),(22,'Marksdlkjs','$2b$10$10WgKqrBM5GoEf04TUItvea6zBwnRGWL3InO5jynpIpbvO90VpcMu','abcsdkjfslsdfsddkjflksdfd@gmail.com'),(23,'sdfsd','$2b$10$pOIic0t7gY9H6xxaPYTtHutped3K2Ss5mRj0rHQUJD3zMp9qbOQii','asdf@lksjdlf.com'),(24,'얍삐리얍22','$2b$10$vBZA8hRR.8bRj1GvyyUm0uReAtrj1uFzD67P4njiEqxmbKvKbOE.W','a23a@a23a.com'),(25,'123123123','$2b$10$VsWShMBYOI2LGqDfC5z96u8sLT8gKxor4rtUBBy40HhHJGHxLnwYm','ab123123cd1@gmail.com'),(26,'sdfsdfsd','$2b$10$ElvXyO9LZSdcSF7pQQuemO3UYLDSvAheceFhVxU6.Vq92nCV38U.6','sdf@djxf.com'),(27,'Mark12312321312','$2b$10$d.84HhL0LBJZOauqkhehMu/wy8sxoDsVqJGLoD9IVIewnp.PIqo5O','a@aa.com');
/*!40000 ALTER TABLE `member_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `program_table`
--

DROP TABLE IF EXISTS `program_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `program_table` (
  `program_id` int NOT NULL AUTO_INCREMENT,
  `program_title` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `program_benefit` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `program_content` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `program_summary_content` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `program_language` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`program_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `program_table`
--

LOCK TABLES `program_table` WRITE;
/*!40000 ALTER TABLE `program_table` DISABLE KEYS */;
INSERT INTO `program_table` VALUES (1,'42 서울','세전 월 100만원 지급','동료평가를 기반으로 교재없이 학습을 진행하는 프로그램','요약메세지','C언어, 서클 진행 후 다른 언어도 가능'),(2,'SSAFY','월 100만원 지급','알고리즘 중심 교육으로 .. 하는 프로그램','요약메세지2','자바, 파이썬');
/*!40000 ALTER TABLE `program_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yearly`
--

DROP TABLE IF EXISTS `yearly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yearly` (
  `id` int NOT NULL AUTO_INCREMENT,
  `program` varchar(50) NOT NULL,
  `nth` int DEFAULT NULL,
  `recruit_s` date DEFAULT NULL,
  `recruit_e` date DEFAULT NULL,
  `compete_s` date DEFAULT NULL,
  `compete_e` date DEFAULT NULL,
  `learn_s` date DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yearly`
--

LOCK TABLES `yearly` WRITE;
/*!40000 ALTER TABLE `yearly` DISABLE KEYS */;
INSERT INTO `yearly` VALUES (1,'42seoul',12,NULL,NULL,'2020-05-25','2020-06-19','2020-06-29','2020-06-11 18:44:50'),(2,'42seoul',21,NULL,NULL,'2020-06-29','2020-07-24','2020-07-27','2020-06-11 20:49:31'),(3,'42seoul',22,NULL,NULL,'2020-07-27','2020-08-21','2020-08-31','2020-06-11 20:49:59'),(4,'42seoul',31,NULL,NULL,'2020-08-31','2020-09-25','2020-10-05','2020-06-11 20:51:18'),(5,'test',123,'2020-05-23','2020-06-21','2020-07-21','2020-07-23',NULL,'2020-06-12 15:55:10'),(12,'42seoul(테스트)',13,NULL,NULL,'2020-03-03','2020-04-04','2020-05-05','2020-07-03 12:02:30'),(39,'42seoul(테스트)',13,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05','2020-07-04 09:45:25'),(42,'42seoul(테스트)',12,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05','2020-07-04 09:58:03'),(43,'111성상님',13,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05','2020-07-04 09:58:04'),(47,'42seoul(테스트)',13,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05','2020-07-04 11:01:01'),(48,'42seoul(테스트)',13,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05','2020-07-04 11:05:31'),(50,'42seoul(테스트)',13,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05','2020-07-04 11:07:54'),(51,'42seoul(테스트)',13,'2020-01-01','2020-02-02','2020-03-03','2020-04-04','2020-05-05','2020-07-04 11:07:56');
/*!40000 ALTER TABLE `yearly` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-17 16:03:29

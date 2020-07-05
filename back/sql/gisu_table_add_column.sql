ALTER TABLE `yebalja`.`gisu_table` 
ADD COLUMN `gisu_recruit_start` DATE NULL AFTER `gisu_end_date`,
ADD COLUMN `gisu_recruit_end` DATE NULL AFTER `gisu_recruit_start`,
ADD COLUMN `gisu_compete_start` DATE NULL AFTER `gisu_recruit_end`,
ADD COLUMN `gisu_compete_end` DATE NULL AFTER `gisu_compete_start`,
ADD COLUMN `gisu_learn_start` DATE NULL AFTER `gisu_compete_end`;

ALTER TABLE `yebalja`.`gisu_table`
CHANGE COLUMN `gisu_start_date` `gisu_start_date` DATE NULL ,
CHANGE COLUMN `gisu_end_date` `gisu_end_date` DATE NULL ;


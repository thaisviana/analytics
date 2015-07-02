window.onload = function() {

$('#km-run').click(function() {    
       $('.form-horizontal').hide();
	   $('#init').hide();
	   $('.container').append('<div id="barchart_values" style="width: 900px; height: 300px;"></div>');
    });

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
      var data = google.visualization.arrayToDataTable([
	['Line', 'Km', { role: 'style' } ],
	['759',92.43,'color: #76A7FA'],
	['388',135.45,'color: #76A7FA'],
	['752',77.86,'color: #76A7FA'],
	['756',98.00,'color: #76A7FA'],
	['750',112.35,'color: #76A7FA'],
	['858',16.85,'color: #76A7FA'],
	['857',24.06,'color: #76A7FA'],
	['870',366.26,'color: #76A7FA'],
	['871',50.20,'color: #76A7FA'],
	['872',42.09,'color: #76A7FA'],
	['873',40.27,'color: #76A7FA'],
	['881',14.51,'color: #76A7FA'],
	['2303',140.16,'color: #76A7FA'],
	['892',23.49,'color: #76A7FA'],
	['2307',132.65,'color: #76A7FA'],
	['2308',121.34,'color: #76A7FA'],
	['2309',68.15,'color: #76A7FA'],
	['2331',141.54,'color: #76A7FA'],
	['365',51.93,'color: #76A7FA'],
	['367',43.34,'color: #76A7FA'],
	['379',41.11,'color: #76A7FA'],
	['383',128.74,'color: #76A7FA'],
	['364',84.42,'color: #76A7FA'],
	['739',43.85,'color: #76A7FA'],
	['389',186.82,'color: #76A7FA'],
	['394',84.06,'color: #76A7FA'],
	['395',90.79,'color: #76A7FA'],
	['743',19.09,'color: #76A7FA'],
	['744',100.48,'color: #76A7FA'],
	['741',41.78,'color: #76A7FA'],
	['742',53.02,'color: #76A7FA'],
	['777',155.89,'color: #76A7FA'],
	['751',34.31,'color: #76A7FA'],
	['767',19.78,'color: #76A7FA'],
	['801',20.75,'color: #76A7FA'],
	['933',44.74,'color: #76A7FA'],
	['936',108.35,'color: #76A7FA'],
	['794',41.87,'color: #76A7FA'],
	['369',82.40,'color: #76A7FA'],
	['370',82.60,'color: #76A7FA'],
	['392',178.13,'color: #76A7FA'],
	['393',93.28,'color: #76A7FA'],
	['396',90.17,'color: #76A7FA'],
	['397',51.95,'color: #76A7FA'],
	['923',66.14,'color: #76A7FA'],
	['2310',47.82,'color: #76A7FA'],
	['366',52.50,'color: #76A7FA'],
	['398',211.96,'color: #76A7FA'],
	['771',27.80,'color: #76A7FA'],
	['804',45.88,'color: #76A7FA'],
	['807',10.97,'color: #76A7FA'],
	['813',14.03,'color: #76A7FA'],
	['821',12.32,'color: #76A7FA'],
	['822',13.35,'color: #76A7FA'],
	['824',14.89,'color: #76A7FA'],
	['825',48.80,'color: #76A7FA'],
	['830',15.92,'color: #76A7FA'],
	['770',57.44,'color: #76A7FA'],
	['833',27.93,'color: #76A7FA'],
	['839',15.98,'color: #76A7FA'],
	['840',81.70,'color: #76A7FA'],
	['841',63.29,'color: #76A7FA'],
	['842',23.31,'color: #76A7FA'],
	['849',37.08,'color: #76A7FA'],
	['850',66.97,'color: #76A7FA'],
	['868',10.80,'color: #76A7FA'],
	['869',8.65,'color: #76A7FA'],
	['891',27.99,'color: #76A7FA'],
	['893',12.44,'color: #76A7FA'],
	['895',16.62,'color: #76A7FA'],
	['898',145.09,'color: #76A7FA'],
	['2335',152.34,'color: #76A7FA'],
	['2337',164.90,'color: #76A7FA'],
	['2802',40.05,'color: #76A7FA'],
	['2336',219.03,'color: #76A7FA'],
	['684',73.28,'color: #76A7FA'],
	['391',83.38,'color: #76A7FA'],
	['730',15.41,'color: #76A7FA'],
	['731',58.25,'color: #76A7FA'],
	['737',16.44,'color: #76A7FA'],
	['746',93.77,'color: #76A7FA'],
	['784',36.15,'color: #76A7FA'],
	['740',45.87,'color: #76A7FA'],
	['745',130.55,'color: #76A7FA'],
	['803',30.90,'color: #76A7FA'],
	['811',22.68,'color: #76A7FA'],
	['812',34.83,'color: #76A7FA'],
	['798',14.61,'color: #76A7FA'],
	['790',159.81,'color: #76A7FA'],
	['820',27.26,'color: #76A7FA'],
	['926',62.74,'color: #76A7FA'],
	['819',39.09,'color: #76A7FA'],
	['769',45.49,'color: #76A7FA'],
	['802',29.80,'color: #76A7FA'],
	['814',9.95,'color: #76A7FA'],
	['834',17.53,'color: #76A7FA'],
	['836',16.48,'color: #76A7FA'],
	['835',19.12,'color: #76A7FA'],
	['837',9.68,'color: #76A7FA'],
	['838',46.84,'color: #76A7FA'],
	['845',13.55,'color: #76A7FA'],
	['843',33.18,'color: #76A7FA'],
	['851',18.82,'color: #76A7FA'],
	['852',38.71,'color: #76A7FA'],
	['864',23.02,'color: #76A7FA'],
	['866',86.16,'color: #76A7FA'],
	['867',241.65,'color: #76A7FA'],
	['876',103.52,'color: #76A7FA'],
	['884',50.52,'color: #76A7FA'],
	['2332',15.95,'color: #76A7FA'],
	['918',36.06,'color: #76A7FA'],
	['2334',295.35,'color: #76A7FA'],
	['2338',148.17,'color: #76A7FA'],
	['2381',267.34,'color: #76A7FA'],
	['2801',41.82,'color: #76A7FA'],
	['358',239.32,'color: #76A7FA'],
	['689',185.89,'color: #76A7FA'],
	['738',76.16,'color: #76A7FA'],
	['786',104.16,'color: #76A7FA'],
	['828',23.21,'color: #76A7FA'],
	['846',24.07,'color: #76A7FA'],
	['894',9.13,'color: #76A7FA'],
	['848',11.63,'color: #76A7FA'],
	['847',14.92,'color: #76A7FA'],
	['202',19.32,'color: #76A7FA'],
	['201',14.83,'color: #76A7FA'],
	['401',23.23,'color: #76A7FA'],
	['413',52.66,'color: #76A7FA'],
	['415',54.65,'color: #76A7FA'],
	['426',46.96,'color: #76A7FA'],
	['626',7.13,'color: #76A7FA'],
	['425',30.56,'color: #76A7FA'],
	['423',36.18,'color: #76A7FA'],
	['434',51.24,'color: #76A7FA'],
	['435',51.10,'color: #76A7FA'],
	['436',40.68,'color: #76A7FA'],
	['464',47.02,'color: #76A7FA'],
	['2014',37.91,'color: #76A7FA'],
	['2015',33.61,'color: #76A7FA'],
	['2017',43.31,'color: #76A7FA'],
	['124',47.58,'color: #76A7FA'],
	['125',30.56,'color: #76A7FA'],
	['217',22.13,'color: #76A7FA'],
	['409',38.63,'color: #76A7FA'],
	['416',28.39,'color: #76A7FA'],
	['602',8.60,'color: #76A7FA'],
	['2203',30.42,'color: #76A7FA'],
	['158',32.52,'color: #76A7FA'],
	['186',37.14,'color: #76A7FA'],
	['523',60.45,'color: #76A7FA'],
	['524',48.93,'color: #76A7FA'],
	['176',40.63,'color: #76A7FA'],
	['220',21.93,'color: #76A7FA'],
	['226',24.00,'color: #76A7FA'],
	['229',21.17,'color: #76A7FA'],
	['448',23.65,'color: #76A7FA'],
	['604',4.13,'color: #76A7FA'],
	['603',9.17,'color: #76A7FA'],
	['608',10.37,'color: #76A7FA'],
	['210',25.67,'color: #76A7FA'],
	['441',49.73,'color: #76A7FA'],
	['445',25.63,'color: #76A7FA'],
	['461',30.54,'color: #76A7FA'],
	['472',47.32,'color: #76A7FA'],
	['473',36.12,'color: #76A7FA'],
	['474',60.88,'color: #76A7FA'],
	['475',54.57,'color: #76A7FA'],
	['503',5.06,'color: #76A7FA'],
	['209',25.11,'color: #76A7FA'],
	['107',25.01,'color: #76A7FA'],
	['111',17.31,'color: #76A7FA'],
	['110',34.35,'color: #76A7FA'],
	['476',43.95,'color: #76A7FA'],
	['120',22.40,'color: #76A7FA'],
	['121',29.13,'color: #76A7FA'],
	['126',30.03,'color: #76A7FA'],
	['123',33.56,'color: #76A7FA'],
	['128',42.52,'color: #76A7FA'],
	['127',35.33,'color: #76A7FA'],
	['129',8.81,'color: #76A7FA'],
	['170',38.88,'color: #76A7FA'],
	['132',37.23,'color: #76A7FA'],
	['173',35.71,'color: #76A7FA'],
	['178',43.55,'color: #76A7FA'],
	['181',84.31,'color: #76A7FA'],
	['190',30.43,'color: #76A7FA'],
	['440',37.00,'color: #76A7FA'],
	['442',32.08,'color: #76A7FA'],
	['443',35.22,'color: #76A7FA'],
	['460',25.90,'color: #76A7FA'],
	['444',26.75,'color: #76A7FA'],
	['462',24.40,'color: #76A7FA'],
	['172',40.53,'color: #76A7FA'],
	['463',24.59,'color: #76A7FA'],
	['119',24.21,'color: #76A7FA'],
	['133',23.15,'color: #76A7FA'],
	['136',35.89,'color: #76A7FA'],
	['154',37.66,'color: #76A7FA'],
	['155',16.51,'color: #76A7FA'],
	['161',33.38,'color: #76A7FA'],
	['162',32.71,'color: #76A7FA'],
	['180',19.18,'color: #76A7FA'],
	['183',14.66,'color: #76A7FA'],
	['184',16.43,'color: #76A7FA'],
	['511',27.28,'color: #76A7FA'],
	['512',27.69,'color: #76A7FA'],
	['569',13.56,'color: #76A7FA'],
	['513',8.09,'color: #76A7FA'],
	['570',29.65,'color: #76A7FA'],
	['580',6.62,'color: #76A7FA'],
	['583',32.18,'color: #76A7FA'],
	['584',29.72,'color: #76A7FA'],
	['222',43.77,'color: #76A7FA'],
	['421',44.62,'color: #76A7FA'],
	['432',49.31,'color: #76A7FA'],
	['433',46.56,'color: #76A7FA'],
	['438',49.74,'color: #76A7FA'],
	['439',36.16,'color: #76A7FA'],
	['605',9.31,'color: #76A7FA'],
	['667',23.92,'color: #76A7FA'],
	['607',41.93,'color: #76A7FA'],
	['420',25.74,'color: #76A7FA'],
	['686',8.55,'color: #76A7FA'],
	['774',35.62,'color: #76A7FA'],
	['775',33.96,'color: #76A7FA'],
	['940',49.27,'color: #76A7FA'],
	['363',137.96,'color: #76A7FA'],
	['651',21.45,'color: #76A7FA'],
	['652',30.01,'color: #76A7FA'],
	['678',39.60,'color: #76A7FA'],
	['337',73.25,'color: #76A7FA'],
	['380',67.58,'color: #76A7FA'],
	['340',68.75,'color: #76A7FA'],
	['390',66.30,'color: #76A7FA'],
	['601',54.37,'color: #76A7FA'],
	['600',57.43,'color: #76A7FA'],
	['611',23.95,'color: #76A7FA'],
	['690',58.76,'color: #76A7FA'],
	['700',43.92,'color: #76A7FA'],
	['701',40.96,'color: #76A7FA'],
	['800',10.54,'color: #76A7FA'],
	['815',31.22,'color: #76A7FA'],
	['816',26.60,'color: #76A7FA'],
	['817',17.10,'color: #76A7FA'],
	['818',69.17,'color: #76A7FA'],
	['826',64.31,'color: #76A7FA'],
	['823',15.27,'color: #76A7FA'],
	['859',6.58,'color: #76A7FA'],
	['827',17.94,'color: #76A7FA'],
	['880',66.04,'color: #76A7FA'],
	['371',52.63,'color: #76A7FA'],
	['2018',115.96,'color: #76A7FA'],
	['723',44.83,'color: #76A7FA'],
	['2918',85.85,'color: #76A7FA'],
	['331',66.76,'color: #76A7FA'],
	['306',63.20,'color: #76A7FA'],
	['332',114.66,'color: #76A7FA'],
	['352',79.65,'color: #76A7FA'],
	['339',58.97,'color: #76A7FA'],
	['348',81.49,'color: #76A7FA'],
	['353',64.53,'color: #76A7FA'],
	['368',77.62,'color: #76A7FA'],
	['525',20.36,'color: #76A7FA'],
	['610',18.73,'color: #76A7FA'],
	['613',21.89,'color: #76A7FA'],
	['614',23.56,'color: #76A7FA'],
	['636',63.39,'color: #76A7FA'],
	['691',58.11,'color: #76A7FA'],
	['692',58.30,'color: #76A7FA'],
	['693',47.47,'color: #76A7FA'],
	['829',5.66,'color: #76A7FA'],
	['844',23.19,'color: #76A7FA'],
	['861',38.75,'color: #76A7FA'],
	['862',27.36,'color: #76A7FA'],
	['863',29.76,'color: #76A7FA'],
	['887',36.64,'color: #76A7FA'],
	['958',69.42,'color: #76A7FA'],
	['2111',63.24,'color: #76A7FA'],
	['2112',63.67,'color: #76A7FA'],
	['2114',50.80,'color: #76A7FA'],
	['2115',92.58,'color: #76A7FA'],
	['301',69.70,'color: #76A7FA'],
	['305',64.17,'color: #76A7FA'],
	['345',77.01,'color: #76A7FA'],
	['805',22.30,'color: #76A7FA'],
	['338',64.61,'color: #76A7FA'],
	['341',81.68,'color: #76A7FA'],
	['732',36.52,'color: #76A7FA'],
	['748',141.33,'color: #76A7FA'],
	['766',35.50,'color: #76A7FA'],
	['888',58.27,'color: #76A7FA'],
	['889',43.36,'color: #76A7FA'],
	['354',95.50,'color: #76A7FA'],
	['465',151.28,'color: #76A7FA'],
	['550',60.48,'color: #76A7FA'],
	['555',19.14,'color: #76A7FA'],
	['556',49.75,'color: #76A7FA'],
	['753',66.62,'color: #76A7FA'],
	['557',60.27,'color: #76A7FA'],
	['734',35.42,'color: #76A7FA'],
	['765',52.86,'color: #76A7FA'],
	['860',6.72,'color: #76A7FA'],
	['875',14.90,'color: #76A7FA'],
	['886',33.29,'color: #76A7FA'],
	['2345',117.50,'color: #76A7FA'],
	['360',109.22,'color: #76A7FA'],
	['361',109.47,'color: #76A7FA'],
	['382',126.94,'color: #76A7FA'],
	['2329',104.02,'color: #76A7FA'],
	['2333',103.88,'color: #76A7FA'],
	['309',75.36,'color: #76A7FA'],
	['504',97.12,'color: #76A7FA'],
	['505',77.77,'color: #76A7FA'],
	['315',103.14,'color: #76A7FA'],
	['316',108.63,'color: #76A7FA'],
	['317',70.22,'color: #76A7FA'],
	['318',87.54,'color: #76A7FA'],
	['957',46.05,'color: #76A7FA'],
	['736',36.49,'color: #76A7FA'],
	['749',85.16,'color: #76A7FA'],
	['747',65.83,'color: #76A7FA'],
	['762',23.48,'color: #76A7FA'],
	['757',33.39,'color: #76A7FA'],
	['758',116.47,'color: #76A7FA'],
	['760',28.54,'color: #76A7FA'],
	['761',26.90,'color: #76A7FA'],
	['764',30.45,'color: #76A7FA'],
	['780',38.82,'color: #76A7FA'],
	['763',27.48,'color: #76A7FA'],
	['806',68.46,'color: #76A7FA'],
	['808',83.50,'color: #76A7FA'],
	['831',82.84,'color: #76A7FA'],
	['832',65.11,'color: #76A7FA'],
	['856',19.88,'color: #76A7FA'],
	['865',18.59,'color: #76A7FA'],
	['952',37.68,'color: #76A7FA'],
	['308',74.16,'color: #76A7FA'],
	['314',108.80,'color: #76A7FA'],
	['501',38.38,'color: #76A7FA'],
	['502',68.20,'color: #76A7FA'],
	['709',29.61,'color: #76A7FA'],
	['712',18.44,'color: #76A7FA'],
	['721',24.14,'color: #76A7FA'],
	['781',32.93,'color: #76A7FA'],
	['782',36.49,'color: #76A7FA'],
	['783',14.62,'color: #76A7FA'],
	['254',48.27,'color: #76A7FA'],
	['277',56.42,'color: #76A7FA'],
	['456',53.03,'color: #76A7FA'],
	['457',56.33,'color: #76A7FA'],
	['458',40.79,'color: #76A7FA'],
	['459',43.97,'color: #76A7FA'],
	['650',43.44,'color: #76A7FA'],
	['373',62.80,'color: #76A7FA'],
	['374',68.69,'color: #76A7FA'],
	['376',125.55,'color: #76A7FA'],
	['725',40.05,'color: #76A7FA'],
	['377',68.67,'color: #76A7FA'],
	['639',155.96,'color: #76A7FA'],
	['950',6.04,'color: #76A7FA'],
	['905',220.42,'color: #76A7FA'],
	['951',4.30,'color: #76A7FA'],
	['261',139.65,'color: #76A7FA'],
	['375',78.91,'color: #76A7FA'],
	['381',81.90,'color: #76A7FA'],
	['385',280.96,'color: #76A7FA'],
	['384',172.69,'color: #76A7FA'],
	['399',78.81,'color: #76A7FA'],
	['404',69.48,'color: #76A7FA'],
	['405',42.44,'color: #76A7FA'],
	['386',82.47,'color: #76A7FA'],
	['483',61.12,'color: #76A7FA'],
	['481',42.92,'color: #76A7FA'],
	['484',220.88,'color: #76A7FA'],
	['485',55.29,'color: #76A7FA'],
	['486',62.40,'color: #76A7FA'],
	['497',48.37,'color: #76A7FA'],
	['498',183.15,'color: #76A7FA'],
	['906',95.93,'color: #76A7FA'],
	['947',29.41,'color: #76A7FA'],
	['2295',81.67,'color: #76A7FA'],
	['2302',81.16,'color: #76A7FA'],
	['945',72.44,'color: #76A7FA'],
	['653',29.89,'color: #76A7FA'],
	['711',61.89,'color: #76A7FA'],
	['334',86.68,'color: #76A7FA'],
	['335',156.23,'color: #76A7FA'],
	['919',45.76,'color: #76A7FA'],
	['920',125.04,'color: #76A7FA'],
	['942',72.86,'color: #76A7FA'],
	['321',25.39,'color: #76A7FA'],
	['324',185.40,'color: #76A7FA'],
	['325',28.49,'color: #76A7FA'],
	['326',173.48,'color: #76A7FA'],
	['329',57.81,'color: #76A7FA'],
	['330',32.86,'color: #76A7FA'],
	['616',23.14,'color: #76A7FA'],
	['925',33.43,'color: #76A7FA'],
	['935',21.12,'color: #76A7FA'],
	['2343',55.17,'color: #76A7FA'],
	['2344',51.70,'color: #76A7FA'],
	['663',40.24,'color: #76A7FA'],
	['312',68.16,'color: #76A7FA'],
	['313',38.69,'color: #76A7FA'],
	['621',40.35,'color: #76A7FA'],
	['622',39.95,'color: #76A7FA'],
	['623',45.29,'color: #76A7FA'],
	['625',44.15,'color: #76A7FA'],
	['662',10.08,'color: #76A7FA'],
	['661',11.42,'color: #76A7FA'],
	['679',34.47,'color: #76A7FA'],
	['298',177.31,'color: #76A7FA'],
	['344',67.28,'color: #76A7FA'],
	['349',279.57,'color: #76A7FA'],
	['355',248.37,'color: #76A7FA'],
	['673',33.17,'color: #76A7FA'],
	['232',78.51,'color: #76A7FA'],
	['249',34.77,'color: #76A7FA'],
	['606',87.17,'color: #76A7FA'],
	['2251',34.57,'color: #76A7FA'],
	['624',75.19,'color: #76A7FA'],
	['917',137.78,'color: #76A7FA'],
	['327',55.61,'color: #76A7FA'],
	['320',37.99,'color: #76A7FA'],
	['322',176.41,'color: #76A7FA'],
	['323',56.70,'color: #76A7FA'],
	['328',149.56,'color: #76A7FA'],
	['901',92.73,'color: #76A7FA'],
	['635',68.05,'color: #76A7FA'],
	['910',152.02,'color: #76A7FA'],
	['911',34.87,'color: #76A7FA'],
	['634',70.70,'color: #76A7FA'],
	['915',28.56,'color: #76A7FA'],
	['914',57.22,'color: #76A7FA'],
	['922',25.04,'color: #76A7FA'],
	['913',32.71,'color: #76A7FA'],
	['924',29.21,'color: #76A7FA'],
	['934',20.05,'color: #76A7FA'],
	['2342',56.53,'color: #76A7FA'],
	['615',39.82,'color: #76A7FA'],
	['687',44.65,'color: #76A7FA'],
	['688',42.50,'color: #76A7FA'],
	['727',9.58,'color: #76A7FA'],
	['779',81.42,'color: #76A7FA'],
	['793',35.18,'color: #76A7FA'],
	['795',47.15,'color: #76A7FA'],
	['342',242.36,'color: #76A7FA'],
	['944',7.52,'color: #76A7FA'],
	['946',53.52,'color: #76A7FA'],
	['2305',59.61,'color: #76A7FA'],
	['630',39.53,'color: #76A7FA'],
	['627',30.92,'color: #76A7FA'],
	['2101',41.13,'color: #76A7FA'],
	['680',50.94,'color: #76A7FA'],
	['2145',52.61,'color: #76A7FA'],
	['350',150.57,'color: #76A7FA'],
	['685',167.49,'color: #76A7FA'],
	['351',59.84,'color: #76A7FA'],
	['629',52.12,'color: #76A7FA'],
	['609',21.06,'color: #76A7FA'],
	['638',53.08,'color: #76A7FA'],
	['676',41.32,'color: #76A7FA'],
	['238',47.37,'color: #76A7FA'],
	['956',17.39,'color: #76A7FA'],
	['239',39.58,'color: #76A7FA'],
	['247',31.79,'color: #76A7FA'],
	['455',91.06,'color: #76A7FA'],
	['362',275.69,'color: #76A7FA'],
	['669',140.62,'color: #76A7FA'],
	['378',221.95,'color: #76A7FA'],
	['773',37.20,'color: #76A7FA'],
	['778',27.76,'color: #76A7FA'],
	['908',104.63,'color: #76A7FA'],
	['801',20.75,'color: #76A7FA'],
	['803',30.90,'color: #76A7FA'],
	['503',5.06,'color: #76A7FA'],
	['525',20.36,'color: #76A7FA'],
	['691',58.11,'color: #76A7FA'],
	['693',47.47,'color: #76A7FA'],
	['875',14.90,'color: #76A7FA'],
	['950',6.04,'color: #76A7FA'],
	['951',4.30,'color: #76A7FA'],
	['315',103.14,'color: #76A7FA'],
	['334',86.68,'color: #76A7FA'],
	['919',45.76,'color: #76A7FA'],
	['335',156.23,'color: #76A7FA'],
	['920',125.04,'color: #76A7FA'],
	['942',72.86,'color: #76A7FA'],
	['727',9.58,'color: #76A7FA'],
	['525',20.36,'color: #76A7FA'],
	['503',5.06,'color: #76A7FA'],
	['778',27.76,'color: #76A7FA'],
	['908',104.63,'color: #76A7FA'],
	['801',20.75,'color: #76A7FA'],
	['803',30.90,'color: #76A7FA'],
	['503',5.06,'color: #76A7FA'],
	['525',20.36,'color: #76A7FA'],
	['691',58.11,'color: #76A7FA'],
	['693',47.47,'color: #76A7FA'],
	['875',14.90,'color: #76A7FA'],
	['950',6.04,'color: #76A7FA'],
	['951',4.30,'color: #76A7FA'],
	['315',103.14,'color: #76A7FA'],
	['334',86.68,'color: #76A7FA'],
	['919',45.76,'color: #76A7FA'],
	['335',156.23,'color: #76A7FA'],
	['920',125.04,'color: #76A7FA'],
	['942',72.86,'color: #76A7FA'],
	['727',9.58,'color: #76A7FA'],
	['525',20.36,'color: #76A7FA'],
	['503',5.06,'color: #76A7FA']
	]);

	var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Kilom�tros rodados por linhas de �nibus",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
	}
}
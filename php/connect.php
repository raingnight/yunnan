<?php
	header('Content-type="text/html";charset="UTF8"');
	define('DB_HOST', 'localhost');  
    define('DB_USER', 'root');  
    define('DB_PWD', 'Test123.');
    define('DB_CHARSET', 'UTF8');  
    define('DB_DBNAME', 'yunnan');
	
	$con=mysql_connect(DB_HOST,DB_USER,DB_PWD);
	if(!$con){
		die('数据库连接失败！'.$mysql_error());
	}
	mysql_select_db(DB_DBNAME);
?>
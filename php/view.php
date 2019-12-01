<?php
header('Content-type="text/html";charset="UTF8"');
$USER_ID=$_POST['userid'];
require_once('connect.php');
$sql="select * from info";
mysql_query("set names 'utf8'");
$result1=mysql_query($sql);
?>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<style>
body{
	background:url("image/bg2.jpg");
}
table{
	text-align:center;
}
</style>
</html>
<?php
echo "<table border='1' align='center'><tr><td>姓名</td><td>邮箱</td><td>云南旅游打算</td><td>想去</td><td>了解过的云南景点</td><td>提交时间</td></tr>";
while($row=mysql_fetch_array($result1)){
    echo "<tr>";
    echo "<td>".$row['name']."</td>";
    echo "<td>".$row['email']."</td>";
    echo "<td>".$row['plan']."</td>";
    echo "<td>".$row['place']."</td>";
	echo "<td>".$row['check']."</td>";
	echo "<td>".$row['time']."</td>";
    echo "</tr>";
}
echo "</table>";
mysql_close($con);
?>

<?php
	
$name=$_POST['name'];
$email=$_POST['email'];
$plan=$_POST['plan'];
$place=$_POST['place'];
$checkbox=$_POST['checkbox'];
	
$servername = "localhost";
$username = "root";
$password = "Test123.";
$dbname = "yunnan";
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
 $check= implode(',',$checkbox);
$sql="insert into info values('$name','$email','$plan','$place','$check',now())";
 //$sql="insert into test values ('test') ";
if (mysqli_query($conn, $sql)) {
    echo "<script>alert('问卷提交成功！即将跳转主页！');location='';</script>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
 
mysqli_close($conn);
?>

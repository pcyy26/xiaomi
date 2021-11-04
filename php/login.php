<?php
include './connect.php';

// 接受数据
$username = $_POST['username'];
$pwd = $_POST['pwd'];

// $username = 'jessica';
// $pwd = '123456';

// sql
$sql = "SELECT * FROM `bbs_users` WHERE `username`='$username'";

$res = mysqli_query($link,$sql);
$row = mysqli_fetch_assoc($res);

if(!$row){
  $arr = ['code'=>0,'msg'=>'用户名不存在'];
}else{
  if($row['password'] == $pwd){
    $arr = ['code'=>1,'msg'=>'登录成功'];
  }else{
    $arr = ['code'=>0,'msg'=>'用户名或密码错误'];    
  }
}

echo json_encode($arr);
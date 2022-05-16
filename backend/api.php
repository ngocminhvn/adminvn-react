<?php
header("Access-Control-Allow-Origin: *");
// source code by minh

require '../config/config.php';
if($_GET['type'] == "getlistscam"){
    $scam = [];
    foreach(mysqli_query($ketnoi,"SELECT * FROM `ticket` ") as $row){
    $scam[] = [
    'id'        => $row['id'],
    'name'      => $row['username'],
    'stk'       => $row['stk'],
    'time'       => $row['ngay']
    ];
    
    }
    exit(json_encode($scam));
}

if($_GET['type'] == "getinfoscam"){
    $ID = $_GET['id'];
    $info = [];
    foreach(mysqli_query($ketnoi,"SELECT * FROM `ticket` WHERE `id` = '$ID' LIMIT 0,1") as $row){
    $info[] = [
    'id'        => $row['id'],
    'name'      => $row['username'],
    'phone'       => $row['sdt'],
    'stk'       => $row['stk'],
    'bank'       => $row['ngan_hang'],
    'time'       => $row['ngay'],
    'image'     => $row['anh'],
    'np_name'     => $row['hoten_np'],
    'np_phone'     => $row['sdt_np']
    ];
    
    }
    exit(json_encode($info));
}

if($_GET['type'] == "postdatascam"){
    $_POST = json_decode(array_keys($_POST)[0], true);
    $name = htmlentities($_POST['name']);
    $phone = htmlentities($_POST['phone']);
    $stk = htmlentities($_POST['stk']);
    $bank = htmlentities($_POST['bank']);
    $note = htmlentities($_POST['name']);
    $image = $_POST['image'];
    // coming soon....
}
?>
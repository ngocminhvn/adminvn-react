<?php
header("Access-Control-Allow-Origin: *");
require 'database.php';

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

if($_GET['type'] == "getlistservice"){
    $scam = [];
    foreach(mysqli_query($ketnoi,"SELECT * FROM `cards` ") as $row){
    $scam[] = [
    'code'        => $row['code'],
    'username'      => $row['username'],
    'phone'       => $row['sdt'],
    'facebook'       => $row['id_fb']
    ];
    
    }
    exit(json_encode($scam));
}

if($_GET['type'] == "fetchscam"){
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

if($_GET['type'] == "fetchservice"){
    $CODE = $_GET['code'];
    $service = [];
    foreach(mysqli_query($ketnoi,"SELECT * FROM `cards` WHERE `code` = '$CODE' LIMIT 0,1") as $row){
    $service[] = [
    'code'        => $row['code'],
    'username'      => $row['username'],
    'phone'       => $row['sdt'],
    'facebook'       => $row['id_fb'],
    'website'       => $row['website'],
    'service'       => $row['dich_vu'],
    'note'     => $row['mota'],
    'money'     => $row['money']
    ];
    
    }
    exit(json_encode($service));
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
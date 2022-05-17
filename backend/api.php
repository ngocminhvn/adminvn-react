<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require 'database.php';
//require '../config/config.php';

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
    $_POST = json_decode(file_get_contents("php://input"),true);
    $name = htmlentities($_POST['name']);
    $phone = htmlentities($_POST['phone']);
    $stk = htmlentities($_POST['stk']);
    $bank = htmlentities($_POST['bank']);
    $note = htmlentities($_POST['name']);
    $image = $_POST['image'];
    $report_name = htmlentities($_POST['report_name']);
    $report_phone = htmlentities($_POST['report_phone']);
    
//    if($name=="" || $phone=="" || $stk=="" || $bank=="" || $note=="" || $image=="" || $report_name=="" || $report_phone==""){
//        exit(json_decode(array('status' => '101')));
//    }
    if(!$name || !$phone || !$stk || !$bank || !$note || !$image || !$report_name || !$report_phone){
        exit(json_decode(array('status' => '101')));
    }
    
    $M = $ketnoi->query("INSERT INTO `ticket` SET 
    `username` = '".$name."',
    `ly_do` = '".$note."',
    `status` = 'sss',
    `sdt` = '".$phone."',
    `ngan_hang` = '".$nganhang."',
    `stk` = '".$stk."',
    `anh` = '".$image."',
    `hoten_np` = '".$report_name."',
    `sdt_np` = '".$report_phone."',
    `ngay` = '".$time."' ");
    if($M){
        exit(json_encode(array('status' => '300')));
    }else{
        exit(json_encode(array('status' => '100')));
    }
}
?>

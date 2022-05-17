<?php

$ketnoi = mysqli_connect('localhost','USERNAME','PASSWORD','DATABASE');
$ketnoi->query("set names 'utf8'");
date_default_timezone_set('Asia/Ho_Chi_Minh');
$time = date('d-m-Y h:i:s');

?>
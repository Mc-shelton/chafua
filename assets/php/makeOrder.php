<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$db_host="localhost";
$db_password="";
$db_user="root";
$db_name="chafua";


$db_conn = new mysqli($db_host,$db_user,$db_password,$db_name);

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$userID = $DecodedData['userID'];
$order = $DecodedData['orders'];
$address = $DecodedData['addresses'];

// echo $userID;
// echo $order;wzw
// echo $address;

$query = "SELECT * FROM users WHERE userID = '$userID'";
$results = mysqli_query($db_conn,$query);



if(mysqli_num_rows($results)<1){
    echo 'User ID not found please signup or login again';
}else{
    $query2= "INSERT INTO orders(userID,address,orders) VALUES('$userID','$address','$order')";
    $results2 = mysqli_query($db_conn, $query2);

if($results2){
    $row = array('userID'=>$userID,'orders'=>$order,'address'=>$address);
    echo $jsonData = json_encode($row);
}else{
    echo 'something went wrong...';
}
}
?>
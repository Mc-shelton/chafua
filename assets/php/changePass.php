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

$email = $DecodedData['Email'];
$Pass = $DecodedData['Password'];
$newPass = $DecodedData['newPassword'];
$userID = $DecodedData['userID'];

$newPass = md5($newPass);

$query = "SELECT * FROM users WHERE Email = '$email' AND Password = '$Pass'";
$results = mysqli_query($db_conn,$query);

if(mysqli_num_rows($results)>0){
$query2 = "UPDATE users SET Password ='$newPass' WHERE Email = '$email' AND Password = '$Pass'";
$results2 = mysqli_query($db_conn,$query2);
    
if($results2){
    $row = array('Password'=>$newPass);
    echo $jsonData = json_encode($row);
}else{
    echo 'something went wrong...';
}
}else{

    echo 'Email not found';
}


?>
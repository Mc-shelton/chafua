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
$name = $DecodedData['Name'];
$Phone = $DecodedData['Phone'];
$inst = $DecodedData['Institution'];
// $Pass = md5($Pass);
$prevEmail = $DecodedData['prevEmail'];
$userID = $DecodedData['userID'];

$query = "SELECT * FROM users WHERE Email = '$prevEmail'";
$results = mysqli_query($db_conn,$query);

if(mysqli_num_rows($results)>0){
$query2 = "UPDATE users SET Name='$name',Email='$email',Phone='$Phone',Institution='$inst' WHERE Email = '$prevEmail' AND Password = '$Pass'";
$results2 = mysqli_query($db_conn,$query2);
    
if($results2){
    $row = array('Name'=>$name,'Password'=>$Pass,'Institution'=>$inst,'Email'=>$email,'Phone'=>$Phone,'userID'=>$userID);
    echo $jsonData = json_encode($row);
}else{
    echo 'something went wrong...';
}
}else{

    echo 'Email not found';
}


?>
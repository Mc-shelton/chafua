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

$Pass = md5($Pass);

$query = "SELECT users.*, campuses.name AS campName, campuses.regionSpecs FROM users INNER JOIN campuses ON users.campusID = campuses.campusID WHERE users.Email = '$email' AND users.Password='$Pass'";

$results = mysqli_query($db_conn,$query);
if(mysqli_num_rows($results)>0){
while ($row = mysqli_fetch_assoc($results)){
    $row;
    echo $jsonData = json_encode($row);
}}else{
    echo 'Failed to log In, Check your details';
}
?>
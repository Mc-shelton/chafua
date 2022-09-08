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

$campusID = $DecodedData['campusID'];

$query = "SELECT * FROM ads INNER JOIN campuses ON ads.campusID = campuses.campusID WHERE ads.campusID = '$campusID'";

$results = mysqli_query($db_conn,$query);
if(mysqli_num_rows($results)>0){
while ($row[] = mysqli_fetch_assoc($results)){
    $jsonData = json_encode($row);
}

echo $jsonData;
}else{
    echo 'Failed Fetch';
}

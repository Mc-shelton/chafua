<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$db_host="localhost";
$db_password="";
$db_user="root";
$db_name="chafua";


$db_conn = new mysqli($db_host,$db_user,$db_password,$db_name);


$query = "SELECT * FROM campuses WHERE campusID = '1'";
$results = mysqli_query($db_conn,$query);

while($row = mysqli_fetch_assoc($results) ){
    echo $row['campusID'];
    echo $row['name'];
    echo $row['regionSpecs'];

}

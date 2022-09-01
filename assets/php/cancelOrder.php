<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$db_host = "localhost";
$db_password = "";
$db_user = "root";
$db_name = "chafua";


$db_conn = new mysqli($db_host, $db_user, $db_password, $db_name);

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$orderID = $DecodedData['orderID'];
$orders = $DecodedData['orders'];

if ($orders != 'Remove') {
    $query = "SELECT * FROM orders WHERE orderID = '$orderID' AND status = 'Active'";
    $results = mysqli_query($db_conn, $query);

    if (mysqli_num_rows($results) > 0) {
        $query2 = "UPDATE orders SET orders='$orders' WHERE orderID = '$orderID'";
        $results2 = mysqli_query($db_conn, $query2);

        echo 'Order cancelled';
    } else {
        echo 'Sry You can not cancel this order';
    }
} 
else {
    $query = "SELECT * FROM orders WHERE orderID = '$orderID' AND status = 'Active'";
    $results = mysqli_query($db_conn, $query);

    if (mysqli_num_rows($results) > 0) {
        $query2 = "DELETE FROM orders WHERE orderID='$orderID'";
        $results2 = mysqli_query($db_conn, $query2);
echo 'Order cancelled';
    } else {
        echo 'Sry You can not cancel this order';
    }
}

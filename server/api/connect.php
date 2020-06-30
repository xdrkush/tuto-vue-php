<?php
 header("Access-Control-Allow-Origin: *");
function getPdo(): PDO
{
    $pdo = new PDO('mysql:host=localhost;dbname=morser;charset=utf8', 'arinfo', 'arinfo', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    return $pdo;
}


// function cors() {
//     // Allow from any origin
//     if (isset($_SERVER['HTTP_ORIGIN'])) {
//         header("Access-Control-Allow-Origin: *");
//         header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
//         header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
//         header('Access-Control-Allow-Credentials: true');
//         header('Access-Control-Max-Age: 86400');
//     }

//     // Access-Control headers are received during OPTIONS requests
//     if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

//         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
//             // may also be using PUT, PATCH, HEAD etc
//             header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");

//         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
//             header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");

//         exit(0);
//     }
// }
// cors();
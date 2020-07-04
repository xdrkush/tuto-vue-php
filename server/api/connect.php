<?php

 header("Access-Control-Allow-Origin: *");

function getPdo(): PDO
{
    $pdo = new PDO('pgsql:host=localhost;port=5432;dbname=tuto-vue-php-psql', 'arinfo', 'arinfo', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    return $pdo;
}

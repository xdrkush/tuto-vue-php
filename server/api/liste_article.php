<?php include_once 'connect.php';

$pdo = getPdo();

$query = $pdo->prepare("SELECT * FROM articles ");
$query->execute();

echo '[';
for ($i = 0; $i < $query->rowCount(); $i++) {
    echo ($i > 0 ? ',' : '') . json_encode($query->fetch());
}
echo ']';

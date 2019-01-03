<?php
$current = file_get_contents('../number.json');
$data = json_decode($current) + 1;

$jsonData = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('../number.json', $jsonData);
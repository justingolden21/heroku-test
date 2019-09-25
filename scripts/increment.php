<?php

$current = file_get_contents('../number.json');
$data = json_decode($current) + 1;

$jsonData = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('../number.json', $jsonData);

// TODO:
// https://github.com/mongolab/mongodb-driver-examples/blob/master/php/php_simple_example.php
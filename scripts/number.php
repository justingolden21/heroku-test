<?php

$data = htmlspecialchars($_GET['n'], ENT_QUOTES);
$jsonData = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('../data.json', $jsonData);
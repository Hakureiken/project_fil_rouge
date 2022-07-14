<?php
    try {
        $bdd = new PDO("mysql:host=localhost;dbname=max_immo","root","");
    } catch (Exception $e) {
        die("Error : " . $e -> getMessage());
    }
?>
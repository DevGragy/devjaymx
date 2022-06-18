<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "devjaymx@gmail.com";

    $headers = "From: $email  \r\n";
    $email_subject = "Contacto por formulario web";
    $email_body = "Hola, mucho gusto me llamo $name.\n\n".$message;

    mail($to, $email_subject, $email_body, $headers);
?>
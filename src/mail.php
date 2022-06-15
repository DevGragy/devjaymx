<?php

    $name = $_POST['Nombre'];
    $email = $_POST['Email'];
    $message = $_POST['Mensaje'];

    $mailheader = "De:".$name."<".$email.">\r\n";

    $recipient = "devjaymx@gmail.com";

    mail($recipient, $name, $message, $mailheader)
    or die("Error!");

    echo("Mensaje enviado");
?>
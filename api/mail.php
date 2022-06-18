<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Methods:  POST, GET');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email']) && empty($_POST['message'])) die();

if ($_POST) {
    http_response_code(200);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "devjaymx@gmail.com";

    $headers = "From: $email  \r\n";
    $email_subject = "Contacto por formulario web";
    $email_body = "Hola, mucho gusto me llamo $name.\n\n" . $message;

    mail($to, $email_subject, $email_body, $headers);
    sleep(1);

    echo json_encode(array(
        "sent" => true
    ));
    header("Location: https://devjaymx.com");
} else {
    echo json_encode(["sent" => false, "message" => "Algo salio mal"]);
}

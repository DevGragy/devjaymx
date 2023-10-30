<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

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
    header("Location: localhost:3000/");
} else {
    echo json_encode(["sent" => false, "message" => "Algo salio mal"]);
}

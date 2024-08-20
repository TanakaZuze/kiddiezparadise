<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $number = $_POST["number"];

    $to = "kiddiezp@gmail.com"; // Replace with the recipient's email address
    $subject = "Enquiry from website";

    $headers = "From: $name <$name>\r\n";
    $headers .= "Reply-To: $number\r\n";

    mail($to, $subject, $message, $headers);

    echo "Email sent successfully!";
} else {
    echo "Invalid request!";
}
?>

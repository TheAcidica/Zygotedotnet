<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];

    $mailheader = "From:" .$name."<".$email.">\r\n";

    $recipient = "theacidica@gmail.com";

    mail($recipient, $subject, $message, $mailheader)
    or die("FUCK ERROR FUCK ERROR FUCK ERROR");

    echo"Message Sent!";
?>
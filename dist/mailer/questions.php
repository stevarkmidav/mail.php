<?php 

$email = trim(strip_tags($_POST['email']));
$phone = trim(strip_tags($_POST['phone']));
$text = trim(strip_tags($_POST['text']));
$city = trim(strip_tags($_POST['city']));

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/Exception.php';
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$mail->CharSet = 'utf-8';


$mail->isSMTP();                                      
$mail->Host = 'smtp.gmail.com'; 
$mail->SMTPAuth = true;                               
$mail->Username = '@gmail.com';                 // Логин = почта               // Логин = почта
$mail->Password = '';  // перейти по ссылке и сделать пароль  https://doc.camkubik.com/ru:info:smtp_passwords // Пароль от ящика
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                                   
 
$mail->setFrom('@gmail.com', 'name');   // От кого письмо 
$mail->addAddress('@gmail.com');     // Add a recipient
$mail->isHTML(true);                                 

$mail->Subject = 'name question';
$mail->Body    = '
		User send question <br> 
	Email: ' . $email . '<br>
	Phone: ' . $phone . ' <br>
  City: ' . $city . ' <br>
	Question: ' . $text . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
<?php
	if($_SERVER['REQUEST_METHOD']== "POST")
	{
		$senderEmail = $_POST['email'];
		$senderName = $_POST['name'];
		$senderMessage = $_POST['message'];				
		$body = 'Thank you '.$senderName.' for connecting to us. We shall respond your message as soon as possible';
		$subject = 'Thank you for connecting to e-mporium';
		$header = 'Response from e-mporium';
		
		mail($senderEmail, $subject, $body, $header);
		mail('snehajain2210@gmail.com', 'CMPE280_Reant-A-Car User email', $senderMessage, $senderName.' sender email id: '.$senderEmail);
		header( "Location: ./index.html" );
	}
?>

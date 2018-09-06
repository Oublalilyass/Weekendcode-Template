<?php

if(isset($_POST['submit']))
   {
	  $Subjs = $_POST['subject'];
	  $mailFrom = $_POST['email'];
	  $Msgs = $_POST['Msg'];
	  
	  $mailTo ="ioublale@gamil.com";
	  $headers ="From: ".$mailFrom;
	  $txt="You have received an email"."\n\n".$message;
	
	mail( $mailTo,$Subjs,$txt,$headers);
	header("Location: index.html?mailsend");
	
   }
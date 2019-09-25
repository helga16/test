<?php
error_reporting(E_ALL);
ini_set('display_errors', 'on');

session_start();
$host='localhost';
$user = 'root';
$pass = '';
$dbName = 'mycity';

$link = mysqli_connect($host, $user, $pass, $dbName);
mysqli_query($link, "SET NAMES 'utf8'");

function addPage($link){
	if(isset($_POST['regname']) and isset($_POST['email']) and isset($_POST['letter'])){
		$regname = $_POST['regname'];
		$email = $_POST['email'];
		$letter = $_POST['letter'];
		$query = "INSERT INTO orders (name,email,text) VALUES ('$regname', '$email', '$letter')";
		mysqli_query($link, $query) or die(mysqli_error($link));
		$_SESSION['message'] = 
					['text'=>'Ваша заявка добавлена и будет рассмотрена в ближайшее время', 'status'=>'success'];

		
	//redirect
	header('Location: /index.html'); die();
	
	}
	
}
addPage($link);

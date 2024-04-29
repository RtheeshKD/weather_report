<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    if (isset($_POST['Name']) && isset($_POST['email']) && isset($_POST['Password']) ) {
        $Name = $_POST['Name'];
        $email = $_POST['email'];
        $Password = $_POST['Password'];
      
        $valid_Name = "Retheesh";
        $valid_email = "retheesh.21msc@kongu.edu";
        $valid_Password = "dheeran18";
        

        if ($Name === $valid_Name && $email === $valid_email && $Password=== $valid_Password) {
            echo "success";
            exit;
        } else {
            echo "failure";
            exit;
        }
    } else {
        echo "invalid";
        exit;
    }
} else {
    header("HTTP/1.1 403 Forbidden");
    echo "Invalid request method";
    exit;
}
?>

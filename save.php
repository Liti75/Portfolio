<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $time = date("Y-m-d H:i:s");

    $file = fopen("responses.csv", "a"); // 'a' = append mode
    fputcsv($file, [$time, $name, $email, $message]);
    fclose($file);

    // Optional: redirect or display success message
    echo "<h3>Thank you! Your message has been saved.</h3>";
} else {
    echo "<h3>Invalid Request</h3>";
}
?>

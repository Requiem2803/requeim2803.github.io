<?php 
require_once 'db.php'; // Loads the DB connection (which also loads .env)

// Get and sanitize input
$fname   = trim($_POST['fname'] ?? '');
$lname   = trim($_POST['lname'] ?? '');
$email   = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

// Initialize an array for errors
$errors = [];

// Validate first name
if (empty($fname)) {
    $errors[] = "First name is required.";
} elseif (!preg_match("/^[a-zA-Z-' ]+$/", $fname)) {
    $errors[] = "First name can only contain letters, spaces, hyphens, or apostrophes.";
}

// Validate last name
if (empty($lname)) {
    $errors[] = "Last name is required.";
} elseif (!preg_match("/^[a-zA-Z-' ]+$/", $lname)) {
    $errors[] = "Last name can only contain letters, spaces, hyphens, or apostrophes.";
}

// Validate email
if (empty($email)) {
    $errors[] = "Email is required.";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format.";
}

// (Optional) Sanitize subject and message
$subject = htmlspecialchars($subject);
$message = htmlspecialchars($message);

// If there are errors, show them and stop
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo "<p style='color:red;'>$error</p>";
    }
    echo "<p><a href='index.php'>Go back</a></p>";
    exit;
}

// All good — insert into DB
$stmt = $conn->prepare("INSERT INTO messages (fname, lname, email, subject, message) VALUES (?, ?, ?, ?, ?)");

// Check if prepare() worked
if (!$stmt) {
    echo "<p style='color:red;'>Prepare failed: " . htmlspecialchars($conn->error) . "</p>";
    exit;
}

$stmt->bind_param("sssss", $fname, $lname, $email, $subject, $message);

// Execute the statement
if ($stmt->execute()) {
    echo "<p>Message successfully saved.</p>";
} else {
    echo "<p style='color:red;'>Error inserting message: " . htmlspecialchars($stmt->error) . "</p>";
}

$stmt->close();
$conn->close();

?>

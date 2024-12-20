<?php
// Database Configuration
$host = "localhost";
$username = "root";
$password = "";
$database = "meters_db";

// Establish Database Connection
$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle Form Submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve Form Data
    $meter_number = $_POST['meter_number'];
    $owner_name = $_POST['owner_name'];
    $current_reading = $_POST['current_reading'];
    $previous_reading = $_POST['previous_reading'];

    // Validate Inputs
    if (is_numeric($current_reading) && is_numeric($previous_reading)) {
        $consumption = $current_reading - $previous_reading;

        // SQL Query with Prepared Statements
        $sql = "INSERT INTO meters (meter_number, owner_name, current_reading, previous_reading, consumption)
                VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            // Bind Parameters
            $stmt->bind_param("ssddd", $meter_number, $owner_name, $current_reading, $previous_reading, $consumption);

            // Execute Statement
            if ($stmt->execute()) {
                echo "<script>alert('Meter added successfully!'); window.location.href='index.html';</script>";
            } else {
                echo "<script>alert('Execution Error: " . $stmt->error . "');</script>";
            }
            $stmt->close();
        } else {
            echo "<script>alert('Statement Preparation Error: " . $conn->error . "');</script>";
        }
    } else {
        echo "<script>alert('Please enter valid numeric values for readings.'); window.location.href='index.html';</script>";
    }
}

// Close Database Connection
$conn->close();
?>

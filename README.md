Electric Meter Management Documentation
Introduction
The Electric Meter Management system is a web-based application designed to track, manage, and monitor electricity usage efficiently. It allows users to record essential details such as the meter number, owner's name, current reading, and previous reading. The data is stored in a database using XAMPP, ensuring a reliable and accessible system for managing electricity consumption.
Features
1.	Add New Meter: Allows users to input and save meter details.
   
3.	Meter Listing: Displays a list of all meters along with their details, including meter number, owner name, current and previous readings, consumption, and available actions.
   
5.	Data Storage: All data is stored securely in a database using XAMPP.
   
7.	Frontend Design: Developed with HTML and CSS for an intuitive and user-friendly interface.
   
9.	Backend Functionality: Managed with JavaScript and PHP for dynamic data handling and database integration.
    
System Components
 Frontend
    •	HTML: Structures the content of the application.
    •	CSS: Provides styling for a visually appealing user interface.
 Backend
    •	JavaScript: Handles dynamic interactions and form validations.
    •	PHP: Facilitates communication between the frontend and the database.
 Database
    •	XAMPP: Used as a local server environment to manage the MySQL database.
    •	Database Table Structure: 
    o	Table Name: meters
    o	Columns: 
	meter_number (VARCHAR): Unique identifier for the meter.

	owner_name (VARCHAR): Name of the meter owner.

	current_reading (INT): The latest meter reading.

	previous_reading (INT): The previous meter reading.

	consumption (INT): Calculated as current_reading - previous_reading.

How It Works

1. Adding a New Meter
•	Users fill in the required details in the "Add New Meter" form:

o	Meter Number
o	Owner Name
o	Current Reading
o	Previous Reading

•	Upon submission, the form data is validated using JavaScript and sent to the backend PHP script.
•	The PHP script inserts the data into the meters table in the database.

3. Displaying Meters
•	The "Meters List" section fetches data from the database using PHP and displays it in a table format.
•	Each row includes the meter number, owner name, current reading, previous reading, consumption, and action buttons (e.g., edit or delete).

5. Calculating Consumption
•	The system automatically calculates electricity consumption as the difference between the current and previous readings.
•	The result is displayed in the "Consumption" column of the meters list

7. Database Integration
•	XAMPP is used to host the MySQL database locally.
•	PHP scripts handle CRUD (Create, Read, Update, Delete) operations for meter data.
Folder Structure
ElectricMeterManagement/
├── index.html # Main HTML file 
├── About.html # Second HTML file
 ├── Conatact.html # 3rd HTML file
 ├── Purpose.html # 4rth HTML file
 ├── styles.css # CSS file for styling
 ├── app.js # JavaScript file for frontend functionality 
├── connect.php # PHP script for database connection 
└── images/ # Folder for images and assetsRequirements

•	Software: 
o	XAMPP (for Apache and MySQL services)
o	Web Browser (e.g., Chrome, Firefox)
•	Programming Languages: 
o	HTML, CSS, JavaScript, PHP

Installation and Setup
1.	Download and install XAMPP.
2.	Place the project folder in the htdocs directory of your XAMPP installation.
3.	Start the Apache and MySQL services from the XAMPP control panel.
4.	Create a database named electric_meter and import the meters table.
5.	Open the index.html file in your web browser.
   
Future Enhancements
•	Add user authentication for secure access.
•	Implement search and filter functionality in the meters list.
•	Allow export of meter data to Excel or PDF.
•	Integrate with external APIs for real-time electricity cost calculation.
License
The Electric Meter Management system is licensed under MIT License.


# Smart Attendance System

## 1. Project Title

**Smart Attendance System**

A web-based attendance management system for managing students, faculty,
attendance records, and low-attendance alerts.

------------------------------------------------------------------------

## 2. Problem Statement

**Problem Statement No. 5: Smart Attendance System**

The system is designed to simplify attendance management by providing
features for student and faculty management, attendance marking,
attendance editing, attendance viewing, and low-attendance alerts.

------------------------------------------------------------------------

## 3. Feature Set

**Feature Set B**

The following features are implemented:

-   Student Management
-   Faculty Management
-   Mark Attendance
-   Edit Attendance
-   View Attendance
-   Low Attendance Alerts
-   Dashboard with attendance statistics

------------------------------------------------------------------------

## 4. Features Implemented

### Student Management

-   Register a new student.
-   Store student details such as:
    -   Name
    -   USN
    -   Semester
    -   Division
    -   Gender
    -   Phone
    -   Email
-   View all registered students.
-   Edit existing student records.
-   Delete student records.
-   Existing student records are loaded automatically when the frontend
    page is refreshed.

### Faculty Management

-   Add a new faculty member.
-   Store faculty details such as:
    -   Name
    -   Faculty ID
    -   Email
    -   Subject
-   View all faculty records.
-   Edit existing faculty records.
-   Delete faculty records.
-   Existing faculty records are loaded automatically when the frontend
    page is refreshed.

### Attendance Management

-   Select a student from the student dropdown.
-   Select a faculty member.
-   Enter/select the subject.
-   Select the attendance date.
-   Mark attendance as:
    -   Present
    -   Absent
-   View attendance records.
-   Edit the attendance status of an existing record.

### Low Attendance Alert

-   Attendance is calculated subject-wise for each student.

-   Total classes and present classes are counted from attendance
    records.

-   Attendance percentage is calculated using:

    `Attendance Percentage = (Present Classes / Total Classes) × 100`

-   A **75% threshold** is used as the project's selected low-attendance
    threshold.

-   Students whose attendance is below 75% are displayed in the Low
    Attendance Alert section.

### Dashboard

The dashboard displays:

-   Total students
-   Total boys
-   Total girls
-   Total faculty
-   Total attendance records
-   Number of low-attendance records

------------------------------------------------------------------------

## 5. Technologies Used

### Frontend

-   HTML5
-   CSS3
-   JavaScript

### Backend

-   Node.js
-   Express.js

### Database

-   MongoDB Atlas
-   Mongoose

### Development and Testing Tools

-   Visual Studio Code
-   Thunder Client
-   MongoDB Atlas

------------------------------------------------------------------------

## 6. System Architecture

The project follows a simple three-layer flow:

``` text
Frontend
HTML + CSS + JavaScript
        |
        | HTTP Requests / REST API
        v
Backend
Node.js + Express.js
        |
        | Mongoose
        v
MongoDB Atlas
```

### Working Flow

``` text
User
  ↓
Frontend Interface
  ↓
Express.js REST API
  ↓
Mongoose
  ↓
MongoDB Atlas
  ↓
Response to Backend
  ↓
Frontend Display
```

------------------------------------------------------------------------

## 7. Project Structure

``` text
Attendence/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── studentController.js
│   │   ├── facultyController.js
│   │   └── attendanceController.js
│   │
│   ├── models/
│   │   ├── Student.js
│   │   ├── Faculty.js
│   │   └── Attendance.js
│   │
│   ├── routes/
│   │   ├── studentRoutes.js
│   │   ├── facultyRoutes.js
│   │   └── attendanceRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

------------------------------------------------------------------------

## 8. Database Collections

The MongoDB database contains the following collections:

### Students

Stores student information including name, USN, semester, division,
gender, phone, and email.

### Faculties

Stores faculty information including name, faculty ID, email, and
subject.

### Attendances

Stores attendance information including:

-   Student ID
-   Faculty ID
-   Subject
-   Date
-   Status

Low attendance is calculated dynamically from attendance records and is
not stored as a separate collection.

------------------------------------------------------------------------

## 9. API Endpoints

### Student APIs

  Method   Endpoint              Purpose
  -------- --------------------- ----------------
  POST     `/api/students`       Add student
  GET      `/api/students`       View students
  PUT      `/api/students/:id`   Edit student
  DELETE   `/api/students/:id`   Delete student

### Faculty APIs

  Method   Endpoint               Purpose
  -------- ---------------------- ----------------
  POST     `/api/faculties`       Add faculty
  GET      `/api/faculties`       View faculty
  PUT      `/api/faculties/:id`   Edit faculty
  DELETE   `/api/faculties/:id`   Delete faculty

### Attendance APIs

  Method   Endpoint                Purpose
  -------- ----------------------- ----------------------------
  POST     `/api/attendance`       Mark attendance
  GET      `/api/attendance`       View attendance
  GET      `/api/attendance/low`   Get low-attendance records
  PUT      `/api/attendance/:id`   Edit attendance

------------------------------------------------------------------------

## 10. How to Run the Project

### Step 1: Open the backend folder

Open the project in Visual Studio Code and open the terminal.

``` bash
cd D:\Attendence\backend
```

### Step 2: Install dependencies

If dependencies are not already installed:

``` bash
npm install
```

The main packages used are:

``` text
express
mongoose
cors
dotenv
```

### Step 3: Configure environment variables

Create a `.env` file inside the `backend` folder:

``` env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

**Do not upload the `.env` file or your MongoDB password to GitHub.**

### Step 4: Start the backend

``` bash
node server.js
```

The backend runs on:

``` text
http://localhost:5000
```

### Step 5: Open the frontend

Open:

``` text
frontend/index.html
```

in the browser.

Make sure the backend server is running while using the frontend.

------------------------------------------------------------------------

## 11. Testing

The APIs were tested using **Thunder Client**.

The following operations were tested:

-   Student registration
-   Student viewing
-   Student editing
-   Student deletion
-   Faculty registration
-   Faculty viewing
-   Faculty editing
-   Faculty deletion
-   Attendance marking
-   Attendance viewing
-   Attendance editing
-   Low-attendance calculation
-   Dashboard statistics

The frontend was also tested for communication with the Express backend
and MongoDB database.

------------------------------------------------------------------------

## 12. Low Attendance Calculation

For each student and subject:

``` text
Total Classes = Number of Attendance Records

Present Classes = Number of records with status "Present"

Attendance Percentage =
(Present Classes / Total Classes) × 100
```

Example:

``` text
Total Classes = 5
Present Classes = 3

Attendance Percentage =
(3 / 5) × 100
= 60%
```

Since 60% is below the selected 75% threshold, the student appears in
the Low Attendance Alert section.

------------------------------------------------------------------------

## 13. Algorithm

### Overall Algorithm

``` text
1. Start.
2. Connect the backend to MongoDB.
3. Load the frontend interface.
4. Display the dashboard and management sections.
5. Manage student records.
6. Manage faculty records.
7. Mark attendance.
8. View attendance records.
9. Edit attendance when required.
10. Calculate subject-wise attendance percentage.
11. Check whether attendance is below 75%.
12. Display low-attendance alerts.
13. Update dashboard statistics.
14. End.
```

------------------------------------------------------------------------

## 14. Flowchart

The system flow is:

``` text
START
  ↓
Connect to MongoDB
  ↓
Load Frontend
  ↓
Display Dashboard
  ↓
Manage Students
(Add / View / Edit / Delete)
  ↓
Manage Faculty
(Add / View / Edit / Delete)
  ↓
Mark Attendance
  ↓
View Attendance
  ↓
Edit Attendance
  ↓
Calculate Attendance Percentage
  ↓
Check Attendance < 75%
  ↓
Display Low Attendance Alert
  ↓
Update Dashboard
  ↓
END
```

------------------------------------------------------------------------

## 15. AI Tools Used

AI tools were used as learning and development assistants during the
project.

### Tool Used

**ChatGPT**

### Uses of AI

-   Understanding Express.js and REST APIs.
-   Understanding MongoDB and Mongoose.
-   Generating and explaining beginner-friendly code.
-   Debugging backend and frontend errors.
-   Understanding API request and response handling.
-   Designing attendance calculation logic.
-   Creating the algorithm and flowchart structure.
-   Improving frontend UI and CSS.
-   Preparing project documentation.

### Example Prompts Used

-   "Explain how to create a student CRUD API using Express and
    MongoDB."
-   "Help me debug this Express.js error."
-   "Create a subject-wise low attendance calculation."
-   "Explain this JavaScript code in simple words."
-   "Create an algorithm for a Smart Attendance System."
-   "Create a flowchart based on the Smart Attendance System algorithm."
-   "Help improve the CSS design of my attendance management system."

AI was used as a development and learning assistant, while the
implemented code and features were tested in the project environment.

------------------------------------------------------------------------

## 16. Screenshots

Add screenshots of the completed project in this section.

Recommended screenshots:

1.  Dashboard
2.  Student Registration and Student List
3.  Faculty Registration and Faculty List
4.  Attendance Management
5.  Low Attendance Alert
6.  Thunder Client API testing
7.  MongoDB collections

Example:

``` text
### Dashboard
![Dashboard](screenshots/dashboard.png)

### Student Management
![Students](screenshots/students.png)

### Faculty Management
![Faculty](screenshots/faculty.png)

### Attendance Management
![Attendance](screenshots/attendance.png)

### Low Attendance Alert
![Low Attendance](screenshots/low-attendance.png)
```

Create a `screenshots` folder in the project before adding these images.

------------------------------------------------------------------------

## 17. Future Enhancements

The system can be extended with:

-   User authentication and login.
-   Role-based access for admin, faculty, and students.
-   Attendance reports and downloadable reports.
-   Date-wise and semester-wise attendance filtering.
-   Email or notification alerts for low attendance.
-   Charts and graphical attendance reports.
-   Student login to view personal attendance.

------------------------------------------------------------------------

## 18. Conclusion

The **Smart Attendance System** provides a simple web-based solution for
managing students, faculty, and attendance records. It uses HTML, CSS,
and JavaScript for the frontend, Express.js and Node.js for the backend,
and MongoDB Atlas for data storage.

The system implements all required **Feature Set B** functions,
including student and faculty management, attendance marking, attendance
editing, attendance viewing, and low-attendance alerts.

const API_URL = "http://localhost:5000/api";

// Add Student
document.getElementById("addStudentBtn").addEventListener("click", async () => {

   const name = document.getElementById("studentName").value;
const usn = document.getElementById("studentUsn").value;
const semester = document.getElementById("studentSemester").value;
const division = document.getElementById("studentDivision").value;
const gender = document.getElementById("studentGender").value;
const phone = document.getElementById("studentPhone").value;
const email = document.getElementById("studentEmail").value;

    try {

        const response = await fetch(`${API_URL}/students`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
    name,
    usn,
    semester,
    division,
    gender,
    phone,
    email
})
        });

        const data = await response.json();

        if (response.ok) {
    alert("Student registered successfully");
    loadStudents();
    loadStudentDropdown();

            document.getElementById("studentName").value = "";
            document.getElementById("studentUsn").value = "";
            document.getElementById("studentSemester").value = "";
            document.getElementById("studentDivision").value = "";
            document.getElementById("studentEmail").value = "";
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Unable to connect to backend");
    }
});


// Get Students
async function loadStudents() {

    try {

        const response = await fetch(`${API_URL}/students`);
        const data = await response.json();

        const tableBody = document.getElementById("studentTableBody");

        tableBody.innerHTML = "";

        data.students.forEach(student => {

            const row = `
    <tr>
        <td>${student.name}</td>
        <td>${student.usn}</td>
        <td>${student.semester}</td>
        <td>${student.division}</td>
        <td>${student.gender}</td>
        <td>${student.phone}</td>
        <td>${student.email}</td>
        <td>
           <button class="edit-btn" onclick="editStudent('${student._id}')">
    ✏️ Edit
</button>

<button class="delete-btn" onclick="deleteStudent('${student._id}')">
    🗑️ Delete
</button>
</td>
    </tr>
`;

            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.error("Error:", error);
    }
}


// Delete Student
async function deleteStudent(id) {

    const confirmDelete = confirm("Are you sure you want to delete this student?");

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch(`${API_URL}/students/${id}`, {
            method: "DELETE"
        });

        const data = await response.json();

        if (response.ok) {

            alert("Student deleted successfully");

            loadStudents();

        } else {

            alert(data.message);
        }

    } catch (error) {

        console.error("Error:", error);
        alert("Unable to connect to backend");

    }
}



// Edit Student
async function editStudent(id) {

    const name = prompt("Enter student name:");
const usn = prompt("Enter USN:");
const semester = prompt("Enter semester:");
const division = prompt("Enter division:");
const gender = prompt("Enter gender (Male or Female):");
const phone = prompt("Enter phone number:");
const email = prompt("Enter email:");

    if (!name || !usn || !semester || !division || !gender || !phone || !email) {
    alert("All fields are required");
    return;
}
    try {

        const response = await fetch(`${API_URL}/students/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
    name,
    usn,
    semester,
    division,
    gender,
    phone,
    email
})
        });

        const data = await response.json();

        if (response.ok) {

            alert("Student updated successfully");

            loadStudents();

        } else {

            alert(data.message);
        }

    } catch (error) {

        console.error("Error:", error);
        alert("Unable to connect to backend");

    }
}





// ==================== FACULTY MANAGEMENT ====================

// Add Faculty
document.getElementById("addFacultyBtn").addEventListener("click", async () => {

    const name = document.getElementById("facultyName").value;
    const facultyId = document.getElementById("facultyId").value;
    const email = document.getElementById("facultyEmail").value;
    const subject = document.getElementById("facultySubject").value;

    try {

        const response = await fetch(`${API_URL}/faculties`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                facultyId,
                email,
                subject
            })
        });

        const data = await response.json();

        if (response.ok) {
    alert("Faculty added successfully");
    loadFaculties();
    loadFacultyDropdown();
    

            document.getElementById("facultyName").value = "";
            document.getElementById("facultyId").value = "";
            document.getElementById("facultyEmail").value = "";
            document.getElementById("facultySubject").value = "";

        } else {

            alert(data.message);
        }

    } catch (error) {

        console.error("Error:", error);
        alert("Unable to connect to backend");

    }
});


// Get Faculty
async function loadFaculties() {

    try {

        const response = await fetch(`${API_URL}/faculties`);
        const data = await response.json();

        const tableBody = document.getElementById("facultyTableBody");

        tableBody.innerHTML = "";

        data.faculties.forEach(faculty => {

            const row = `
                <tr>
                    <td>${faculty.name}</td>
                    <td>${faculty.facultyId}</td>
                    <td>${faculty.email}</td>
                    <td>${faculty.subject}</td>
                    <td>
                     <button class="edit-btn" onclick="editFaculty('${faculty._id}')">
    ✏️ Edit
</button>

<button class="delete-btn" onclick="deleteFaculty('${faculty._id}')">
    🗑️ Delete
</button>
                    </td>
                </tr>
            `;

            tableBody.innerHTML += row;
        });

    } catch (error) {

        console.error("Error:", error);

    }
}


// Delete Faculty
async function deleteFaculty(id) {

    const confirmDelete = confirm("Are you sure you want to delete this faculty?");

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch(`${API_URL}/faculties/${id}`, {
            method: "DELETE"
        });

        const data = await response.json();

        if (response.ok) {

            alert("Faculty deleted successfully");

            loadFaculties();

        } else {

            alert(data.message);
        }

    } catch (error) {

        console.error("Error:", error);
        alert("Unable to connect to backend");

    }
}


// Edit Faculty
async function editFaculty(id) {

    const name = prompt("Enter faculty name:");
    const facultyId = prompt("Enter faculty ID:");
    const email = prompt("Enter email:");
    const subject = prompt("Enter subject:");

    if (!name || !facultyId || !email || !subject) {
        alert("All fields are required");
        return;
    }

    try {

        const response = await fetch(`${API_URL}/faculties/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                facultyId,
                email,
                subject
            })
        });

        const data = await response.json();

        if (response.ok) {

            alert("Faculty updated successfully");

            loadFaculties();

        } else {

            alert(data.message);
        }

    } catch (error) {

        console.error("Error:", error);
        alert("Unable to connect to backend");

    }
}


// ==================== ATTENDANCE MANAGEMENT ====================

// Mark Attendance
document.getElementById("markAttendanceBtn").addEventListener("click", async () => {

    const studentId = document.getElementById("attendanceStudent").value;
    const facultyId = document.getElementById("attendanceFaculty").value;
    const subject = document.getElementById("attendanceSubject").value;
    const date = document.getElementById("attendanceDate").value;
    const status = document.getElementById("attendanceStatus").value;

    if (!studentId || !facultyId || !subject || !date || !status) {
        alert("Please fill all attendance fields");
        return;
    }

    try {

        const response = await fetch(`${API_URL}/attendance`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                studentId,
                facultyId,
                subject,
                date,
                status
            })
        });

        const data = await response.json();

        if (response.ok) {
    alert("Attendance marked successfully");

    loadAttendance();
    loadLowAttendance();
    loadDashboard();

            document.getElementById("attendanceStudent").value = "";
            document.getElementById("attendanceFaculty").value = "";
            document.getElementById("attendanceSubject").value = "";
            document.getElementById("attendanceDate").value = "";
            document.getElementById("attendanceStatus").value = "";

        } else {
    alert(data.message + "\n\nError: " + data.error);
}

    } catch (error) {

        console.error("Error:", error);
        alert("Unable to connect to backend");

    }
});


// View Attendance
async function loadAttendance() {

    try {

        const response = await fetch(`${API_URL}/attendance`);
        const data = await response.json();
        console.log("Attendance data:", data);

        const tableBody = document.getElementById("attendanceTableBody");

        tableBody.innerHTML = "";

        data.attendance.forEach(record => {

            const row = `
                <tr>
                    <td>${record.studentId.name}</td>
                    <td>${record.facultyId.name}</td>
                    <td>${record.subject}</td>
                    <td>${new Date(record.date).toLocaleDateString()}</td>
                    <td>${record.status}</td>
                   <td>
    <span class="status ${record.status === "Present" ? "present" : "absent"}">
        ${record.status}
    </span>
</td>
                </tr>
            `;

            tableBody.innerHTML += row;
        });

    } catch (error) {

        console.error("Error:", error);

    }
}


// Load attendance when page opens
loadAttendance();


// Edit Attendance
async function editAttendance(id, currentStatus) {

    const newStatus = prompt(
        "Enter attendance status (Present or Absent):",
        currentStatus
    );

    if (newStatus !== "Present" && newStatus !== "Absent") {
        alert("Please enter Present or Absent");
        return;
    }

    try {

        const response = await fetch(`${API_URL}/attendance/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: newStatus
            })
        });

        const data = await response.json();

       if (response.ok) {
    alert("Attendance updated successfully");

    loadAttendance();
    loadLowAttendance();
    loadDashboard();
        } else {

            alert(data.message);
        }

    } catch (error) {

        console.error("Error:", error);
        alert("Unable to connect to backend");

    }
}





// Load students into attendance dropdown
async function loadStudentDropdown() {

    try {

        const response = await fetch(`${API_URL}/students`);
        const data = await response.json();

        const dropdown = document.getElementById("attendanceStudent");

        dropdown.innerHTML = '<option value="">Select Student</option>';

        data.students.forEach(student => {

            const option = document.createElement("option");

            option.value = student._id;
            option.textContent = `${student.name} (${student.usn})`;

            dropdown.appendChild(option);
        });

    } catch (error) {

        console.error("Error loading students:", error);

    }
}


// Load faculty into attendance dropdown
async function loadFacultyDropdown() {

    try {

        const response = await fetch(`${API_URL}/faculties`);
        const data = await response.json();

        const dropdown = document.getElementById("attendanceFaculty");

        dropdown.innerHTML = '<option value="">Select Faculty</option>';

        data.faculties.forEach(faculty => {

            const option = document.createElement("option");

            option.value = faculty._id;
            option.textContent = `${faculty.name} (${faculty.facultyId})`;

            dropdown.appendChild(option);
        });

    } catch (error) {

        console.error("Error loading faculty:", error);

    }
}


// Load dropdowns when page opens
loadStudentDropdown();
loadFacultyDropdown();



// ==================== LOW ATTENDANCE ====================

// Load Low Attendance
async function loadLowAttendance() {

    try {

        const response = await fetch(`${API_URL}/attendance/low`);
        const data = await response.json();

        const tableBody = document.getElementById("lowAttendanceTableBody");

        tableBody.innerHTML = "";

        data.lowAttendanceStudents.forEach(student => {

            const row = `
    <tr>
        <td>${student.student.name}</td>
        <td>${student.student.usn}</td>
        <td>${student.subject}</td>
        <td>${student.totalAttendance}</td>
        <td>${student.present}</td>
       <td>
    <span class="attendance-percentage">
        ${student.attendancePercentage.toFixed(2)}%
    </span>
</td>

<td>
    <span class="low-badge">
        ⚠ Low Attendance
    </span>
</td>
    </tr>
`;

            tableBody.innerHTML += row;
        });

    } catch (error) {

        console.error("Error loading low attendance:", error);

    }
}


// Load low attendance when page opens
loadLowAttendance();




// ==================== DASHBOARD ====================

// Load Dashboard Counts
async function loadDashboard() {

    try {

        // Get Students
        const studentResponse = await fetch(`${API_URL}/students`);
        const studentData = await studentResponse.json();

        document.getElementById("studentCount").textContent =
            studentData.students.length;

            const boys = studentData.students.filter(
    student => student.gender === "Male"
).length;

const girls = studentData.students.filter(
    student => student.gender === "Female"
).length;

document.getElementById("boyCount").textContent = boys;
document.getElementById("girlCount").textContent = girls;


        // Get Faculty
        const facultyResponse = await fetch(`${API_URL}/faculties`);
        const facultyData = await facultyResponse.json();

        document.getElementById("facultyCount").textContent =
            facultyData.faculties.length;


        // Get Attendance
        const attendanceResponse = await fetch(`${API_URL}/attendance`);
        const attendanceData = await attendanceResponse.json();

        document.getElementById("attendanceCount").textContent =
            attendanceData.attendance.length;


        // Get Low Attendance
        const lowResponse = await fetch(`${API_URL}/attendance/low`);
        const lowData = await lowResponse.json();

        document.getElementById("lowAttendanceCount").textContent =
            lowData.lowAttendanceStudents.length;

    } catch (error) {

        console.error("Error loading dashboard:", error);

    }
}


// Load Dashboard when page opens
loadDashboard();

// ==================== NAVIGATION ====================

function goToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

loadStudents();
loadFaculties();
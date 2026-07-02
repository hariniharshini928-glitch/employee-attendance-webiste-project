const form = document.getElementById("attendanceForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const id = document.getElementById("empId").value.trim();
    const name = document.getElementById("empName").value.trim();
    const dept = document.getElementById("department").value.trim();
    const working = parseInt(document.getElementById("workingDays").value);
    const present = parseInt(document.getElementById("presentDays").value);
    const leave = parseInt(document.getElementById("leaveDays").value);

    
    if (!id || !name || !dept || isNaN(working) || isNaN(present) || isNaN(leave)) {
        alert("Please fill all fields.");
        return;
    }

    if (present > working) {
        alert("Present Days cannot be greater than Working Days.");
        return;
    }

    if (leave > working) {
        alert("Leave Days cannot be greater than Working Days.");
        return;
    }

   
    const percentage = ((present / working) * 100).toFixed(2);

    let status = "";
    let badge = "";

    if (percentage >= 90) {
        status = "Excellent";
        badge = "excellent";
    } else if (percentage >= 75) {
        status = "Good";
        badge = "good";
    } else if (percentage >= 50) {
        status = "Average";
        badge = "average";
    } else {
        status = "Poor";
        badge = "poor";
    }

    
    const row = `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${dept}</td>
            <td>${working}</td>
            <td>${present}</td>
            <td>${leave}</td>
            <td>${percentage}%</td>
            <td><span class="status ${badge}">${status}</span></td>
        </tr>
    `;

    tableBody.innerHTML += row;

   
    form.reset();
});
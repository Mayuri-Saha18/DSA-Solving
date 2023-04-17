let leaveData = JSON.parse(localStorage.getItem("leaveDetails")) || [];

function handleLeave(e) {
    e.preventDefault();

    let form = document.getElementById("form");

    let uniqueId = document.getElementById("uniqueId").value;
    let name = document.getElementById("name").value;
    let reasonLeave = document.getElementById("reasonLeave").value;
    let designation = document.getElementById("designation").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let overseer = document.getElementById("overseer").value;

    if (!uniqueId || !name || !reasonLeave || !designation || !startDate || !endDate || !overseer) {
        alert("Please Fil all the fields.")
        return;
    }

    let leavePayload = {
        userUniqueId: uniqueId,
        userName: name,
        userReasonLeave: reasonLeave,
        userDesignation: designation,
        userStartDate: startDate,
        userEndDate: endDate,
        userOverseer: overseer,
    }

    let otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;


    leavePayload.otp=otp;

    leaveData.push(leavePayload);

    localStorage.setItem("leaveDetails", JSON.stringify(leaveData));

    window.location.href = "dashboard.html";
    console.log(leavePayload);
    alert("Leave Request Applied");
}



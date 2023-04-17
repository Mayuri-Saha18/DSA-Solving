let getLeaveData = JSON.parse(localStorage.getItem("leaveDetails"));
statusData(getLeaveData);


function statusData() {
    getLeaveData.forEach(function (el) {
        let uniq = document.createElement("h1");
        uniq.innerText = el.userUniqueId

        let name = document.createElement("h1");
        name.innerText = el.userName

        let days = document.createElement("h3");
        let start = Number(el.userStartDate);
        let end = Number(el.userEndDate);

        let numberofDays = Math.abs(end - start);
        let allDays = Math.ceil(numberofDays / (1000 * 60 * 60 * 24));

        days.innerText = allDays;

        let over = document.createElement("h3");
        over.innerText = el.userOverseer;


        let status = document.createElement("h4");
        status.innerText = "Pending";

        let appendBox = document.getElementById("statusMain");
        appendBox.append(uniq, name, days, over, status);

    })
}

let submit = document.getElementById("addRoom");

submit.addEventListener("click", function () {
    addRoom(event);
})




async function addRoom(event) {

    event.preventDefault();

    let roomPayload = {
        category: document.getElementById("category").value,
        image: document.getElementById("image").value,
        ac: document.getElementById("ac").value,
        nonac: document.getElementById("nonac").value,
        bed: document.getElementById("bed").value,
        adults: document.getElementById("adults").value,
        capacity: document.getElementById("capacity").value,
        cost: document.getElementById("cost").value,
    }

    // console.log(roomPayload);

    roomPayload = JSON.stringify(roomPayload);

    let res = fetch("https://mock4-server-uoq7.onrender.com/hotels", {
        method: 'POST',
        body: roomPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await res.json();
    // console.log(data);
    // window.location.href="hotel.html"
    alert("Hotel Added Successfull!")
}


// function showAllRooms() {
//     fetch("http://localhost:3000/hotels")
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             appendRoom(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

let showData;

async function showAllRooms() {
    let res = await fetch("https://server-mock-pmja.onrender.com/hotels");
    showData = await res.json();
    console.log('showData :', showData);
    appendRoom(showData);

}

showAllRooms();




function appendRoom(data) {
    let showHotel = document.querySelector("#showHotel");
    showHotel.innerHTML = "";
    // document.querySelector("tbody").innerHTML=""

    data.forEach((el) => {
        let tr = document.createElement("tr");

        let category = document.createElement("td");
        category.innerHTML = el.category;

        let ac = document.createElement("td");
        ac.innerHTML = el.ac;

        let bed = document.createElement("td");
        bed.innerHTML = el.bed;

        let adults = document.createElement("td");
        adults.innerHTML = el.adults;

        let capacity = document.createElement("td");
        capacity.innerHTML = el.capacity;

        let cost = document.createElement("td");
        cost.innerHTML = el.cost;

        let id = document.createElement("td");
        id.innerHTML = el.id;

        let editB = document.createElement("td");
        let edit = document.createElement("button");
        edit.innerHTML = "Edit";


        let deleteB = document.createElement("td");
        let deleteBTN = document.createElement("button");
        deleteBTN.innerHTML = "Delete";

        editB.append(edit);
        deleteB.append(deleteBTN);

        // let tbody = 
        tr.append(id, category, ac, bed, adults, capacity, cost, editB, deleteB);
        // document.getElementById("tbody").append(tr);
        let tbody = document.createElement("tbody")
        tbody.append(tr);
        showHotel.append(tbody)

    })
}



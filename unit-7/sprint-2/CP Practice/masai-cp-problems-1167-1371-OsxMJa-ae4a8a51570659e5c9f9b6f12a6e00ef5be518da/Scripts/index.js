// Write code related to Home Page

let homeData = JSON.parse(localStorage.getItem("Helpers")) || [];

function catchData(e) {
    e.preventDefault();

    let payLoad = {
        name: document.getElementById("name").value,
        number: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        type: document.getElementById("type").value
    }

    if (!payLoad) {
        alert("Please fill all inputs");
        return;
    }

    // console.log(payLoad);
    homeData.push(payLoad);
    console.log(homeData);

    localStorage.setItem("Helpers", JSON.stringify(homeData));


}
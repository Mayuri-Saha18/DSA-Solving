let token="loginToken";

let username;


async function getName() {
    try {
        let res = await fetch("https://mock4-server-uoq7.onrender.com/users");
        let dataname = await res.json();
        username = dataname[0].username;
        localStorage.setItem("username",username);
    }
    catch (err) {
        console.log(err);
    }
}

getName();


async function handleLogin(e) {
    e.preventDefault();

    let loginLoad = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    fetch(`https://mock4-server-uoq7.onrender.com/users?email=${loginLoad.email}&password=${loginLoad.password}`)
        .then((res) => res.json())
        .then((res) => {
            console.log("login successful", res)
            alert("login successful");
            localStorage.setItem("token",token);
            window.location.href = "index.html"
        })
        .catch((err) => {
            console.log("login failed", err)
            alert("login failed")
        })

    console.log(loginLoad);
}



async function login(e){
    e.preventDefault();

    let loginPayLoad={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }

    if(!email || !password){
        alert("Please Enter Details");
        return;
    }

    loginPayLoad=JSON.stringify(loginPayLoad);

    if(email.includes("reqres.in")){
        let res=await fetch("https://reqres.in/api/login",{
            method:'POST',
            body:loginPayLoad,
            headers:{
                'Content-Type':'application/json'
            }
        })
        let data=await res.json();
        console.log(data);
        window.location.href="admin.html"
        alert("Admin Login Successfull!")
    }

    else{
        let res=await fetch("https://server-mock-pmja.onrender.com/users",{
            method:'POST',
            body:loginPayLoad,
            headers:{
                'Content-Type':'application/json'
            }
        })
        let data=await res.json();
        console.log(data);
        window.location.href="hotel.html"
        alert("User Login Successfull!")
    }


}


async function register(e){
    e.preventDefault();


    let signPayload={
        userName:document.getElementById("username").value,
        email:document.getElementById("emailR").value,
        password:document.getElementById("passwordR").value,
        repPassword:document.getElementById("repPasswordR").value
    }

    // if(!userName || !email || !password || !repPassword){
    //     alert("Please Enter Details");
    //     return;
    // }


    signPayload=JSON.stringify(signPayload)

    let res=await fetch("https://server-mock-pmja.onrender.com/users",{
        method:'POST',
        body:signPayload,
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data=await res.json();
    console.log(data);
    // window.location.href="hotel.html"
    alert("User Register Successfull!")

}



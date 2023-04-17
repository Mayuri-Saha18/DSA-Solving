async function handleSignup(e){
    e.preventDefault();

    let signUpLoad={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }

    signUpLoad=JSON.stringify(signUpLoad);

    let res=await fetch("https://mock4-server-uoq7.onrender.com/users",{
        method:'POST',
        body:signUpLoad,
        headers:{
            'Content-Type':'application/json'
        }

    });

    let data=await res.json();

    alert("User Register Successfully");
    
    window.location.href="login.html";

    console.log(signUpLoad);
}
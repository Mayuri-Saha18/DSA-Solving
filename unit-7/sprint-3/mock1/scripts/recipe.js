let username=localStorage.getItem("username");



async function handleAdd(e) {
    e.preventDefault();

    let payload = {
        username: username,
        title: document.getElementById("title").value,
        image: document.getElementById("image").value,
        desc: document.getElementById("desc").value,
        category: document.getElementById("category").value,
        ing: document.getElementById("ing").value,
        instructions: document.getElementById("instructions").value,
    }

    
    payload = JSON.stringify(payload);

    let res = await fetch("https://mock4-server-uoq7.onrender.com/recipes", {
        method: "POST",
        body: payload,
        headers: {
            "Content-Type": "application/json",
        }
    });

    let data = await res.json();

    alert("Recipe Added");
    window.location.reload();


    console.log(payload.username);
}


let recipeData;

async function getRecipe() {
    try {
        let res = await fetch("https://mock4-server-uoq7.onrender.com/recipes");
        recipeData = await res.json();
        console.log(recipeData);
        showRecipe(recipeData);
    }
    catch (err) {
        console.log(err);
    }
}

getRecipe();


function showRecipe(data) {
    let container = document.getElementById("container");
    container.innerHTML = "";

    data.forEach(el => {
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("h2");
        name.innerText = el.username;

        let title = document.createElement("h1");
        title.innerText = el.title;

        let desc = document.createElement("p");
        desc.innerText = el.desc;

        let category = document.createElement("h4");
        category.innerText = el.category;

        let ing = document.createElement("h4");
        ing.innerText = el.ing;

        let instructions = document.createElement("p");
        instructions.innerText = el.instructions;

        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click",function(){
            deleteRecipe(el);
        })

        box.append(img, name, title, desc, category, ing, instructions, editBtn, deleteBtn);

        container.append(box);

    });
}


async function deleteRecipe(el){
    let id=el.id;

    let res= await fetch(`https://mock4-server-uoq7.onrender.com/recipes/${id}`,{
        method:"DELETE",
    });

    let data=await res.json();
    alert("Recipe Deleted");
    showRecipe(data);
    window.location.reload();
}

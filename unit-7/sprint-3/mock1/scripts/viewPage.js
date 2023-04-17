let id=localStorage.getItem("id");
let viewData;

async function viewRecipe() {
    try {
        let res = await fetch(`https://mock4-server-uoq7.onrender.com/recipes/${id}`);
        viewData = await res.json();
        console.log(viewData);
        appendRecipe(viewData);
    }
    catch (err) {
        console.log(err);
    }
}

viewRecipe();


function appendRecipe(data){
    let main=document.getElementById("main");

    let img = document.createElement("img");
    img.src = data.image;

    let name = document.createElement("h2");
    name.innerText = data.username;

    let title = document.createElement("h1");
    title.innerText = data.title;

    let desc = document.createElement("p");
    desc.innerText = data.desc;

    let category = document.createElement("h4");
    category.innerText = data.category;

    let ing = document.createElement("h4");
    ing.innerText = data.ing;

    let instructions = document.createElement("p");
    instructions.innerText = data.instructions;

    main.append(img,name,title,desc,category,ing,instructions);
}
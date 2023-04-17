let token=localStorage.getItem("token");

if(token){
    getRecipe();
}
else{
    alert("Login First");
    window.location.href="login.html";
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

        let btn = document.createElement("button");
        btn.innerText = "View Recipe";
        btn.addEventListener("click", function () {
            view(el);
        })

        box.append(img, name, title, desc, category, ing, instructions, btn);

        container.append(box);

    });
}



//filter

function handleFilter(event) {
    let { value } = event.target;

    if (value == "All") {
        showRecipe(recipeData);
    }
    else {
        let filterData = recipeData.filter((el) => el.category === value);
        showRecipe(filterData);
    }
}


//search

// function handleSearch(event){
//     // let {query}=document.getElementById("search").value;
//     let {query}=event.target;

//     alert("aaa")
//     console.log(query);
// }


function view(el) {
    localStorage.setItem("id", el.id);
    window.location.href = "viewPage.html"
}



// let catDataLS=JSON.parse(localStorage.getItem("catDataLS")) || [];
let catData;
let catimage=[]

async function catchData() {
    try {
        let res = await fetch("https://api.thecatapi.com/v1/breeds");
        catData = await res.json();

        // console.log(catData[3].name);
        console.log(catData);
        // localStorage.setItem("catDataLS",JSON.stringify(catData));
        showCats(catData);
    }
    catch (err) {
        console.log(`Error:${err}`);
    }
}

catchData();

let mainBox = document.getElementById("mainBox");

function showCats(data) {
    mainBox.innerHTML=null;

    data = data.slice(0, 11);

    data.map((el, i) => {
        let container = document.createElement("div");
        container.setAttribute("class", "container");


        let imgBox = document.createElement("div");
        imgBox.setAttribute("class", "imgBox");


        let img = document.createElement("img");
        
        img.src=`https://cdn2.thecatapi.com/images/${el.reference_image_id}.jpg`

        imgBox.append(img);

        let catName = document.createElement("h1");
        catName.setAttribute("class", "catName");
        catName.innerText=el.name;

        let catDesc = document.createElement("p");
        catDesc.setAttribute("class", "catDesc");
        catDesc.innerText=el.description;

        let catOri = document.createElement("h3");
        catOri.setAttribute("class", "catOri");
        catOri.innerText=`Origin:${el.origin}`


        let catTem = document.createElement("h3");
        catTem.setAttribute("class", "catTem");
        catTem.innerText=el.temperament;


        let catLife = document.createElement("h3");
        catLife.setAttribute("class", "catLife");
        catLife.innerText=`Life Span${el.life_span}`;


        let catWik = document.createElement("h4");
        catWik.setAttribute("class", "catWik");

        let link = document.createElement("a");
        link.innerText="Wikipedia"
        link.href=el.wikipedia_url;

        catWik.append(link);

        let viewBtn = document.createElement("button");
        viewBtn.setAttribute("class", "viewBtn");
        viewBtn.innerText="View Image";
        viewBtn.addEventListener("click",function(){
            localStorage.setItem("catImage",JSON.stringify(el.id));
            window.location.href="cat.html";
        })

        container.append(imgBox, catName, catDesc, catOri, catTem, catLife, catWik, viewBtn);

        mainBox.append(container);


    })
}


//pagination

function handlePagination(e){
    const {value}=e.target;

    if(value==="1"){
        let pageData=catData.slice(0,5);
        showCats(pageData);
    }
    else if(value==="2"){
        let pageData=catData.slice(6,10);
        showCats(pageData);
    }
    else if(value==="3"){
        let pageData=catData.slice(11,15);
        showCats(pageData);
    }
    if(value==="4"){
        let pageData=catData.slice(16,20);
        showCats(pageData);
    }
}


function handleSearch(event) {
    event.preventDefault();
    let text = document.getElementById("search").value;
    let query = text.toLowerCase();
    let searchData = catData.filter((el) => {
      if (el.name.toLowerCase() == query) {
        return el;
      }
    });
    console.log(searchData);
    showCats(searchData);
  }
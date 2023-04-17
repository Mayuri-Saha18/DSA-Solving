let catImages=JSON.parse(localStorage.getItem("catImage"));
let api="live_Idf3uJPuzNcJ2g2cK0ndAj5S2aENwtx1v2jUTAc9J2RUIWi5iuePuchWCmHe9xPc";
let favImg=JSON.parse(localStorage.getItem("favImg")) || [];


async function catchImage() {
    try {
        let res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catImages}&api_key=${api}`);
        catPic = await res.json();

        console.log(catPic);
        appendImage(catPic);

    }
    catch (err) {
        console.log(`Error:${err}`);
    }
}

catchImage();


function appendImage(data){
    
    data.map((el,i)=>{
        let imgContainer=document.createElement("div");
        

        let photo=document.createElement("img");
        photo.setAttribute("class","photo")
        photo.src=el.url;
        photo.addEventListener("click", function(){
            addFav(el);
            window.location.href="favourite.html";
        })

        imgContainer.append(photo);

        let imageBox=document.getElementById("imageBox");
        imageBox.append(imgContainer);
    })
}


function addFav(el){
    favImg.push(el.url);
    localStorage.setItem("favImg",JSON.stringify(favImg));

}


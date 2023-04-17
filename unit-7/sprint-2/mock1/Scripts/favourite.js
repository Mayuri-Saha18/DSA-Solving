let favImg=JSON.parse(localStorage.getItem("favImg")) || [];
let favPic;



appendFav(favImg);

function appendFav(data){
    
    data.map((el)=>{
        let favContainer=document.createElement("div");
        

        let photo=document.createElement("img");
        photo.setAttribute("class","photo")
        photo.src=el;

        favContainer.append(photo);

        let mainFav=document.getElementById("mainFav");
        mainFav.append(favContainer);
    })
}
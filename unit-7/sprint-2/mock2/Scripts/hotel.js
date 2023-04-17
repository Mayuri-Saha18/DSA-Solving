let allHotel;


async function getHotel(){
    let res = await fetch("https://server-mock-pmja.onrender.com/hotels");
    allHotel = await res.json();
    console.log('allHotel :', allHotel);
    appendHotel(allHotel);
}

getHotel();

function appendHotel(data){
    let allHotel=document.getElementById("allHotel");

    data.forEach(el => {
        let div=document.createElement("div");
        div.setAttribute("class","div")

        let img=document.createElement("img");
        img.src=el.image;

        let room=document.createElement("h2");
        room.innerHTML=el.category;

        let cap=document.createElement("h4");
        cap.innerHTML=el.capacity;

        let bed=document.createElement("h4");
        bed.innerHTML=el.bed;

        let cost=document.createElement("h4");
        cost.innerHTML=el.cost;

        let book=document.createElement("button");
        book.innerHTML="Book Now"


        div.append(img, room,cap, bed,cost,book);
        allHotel.append(div);
    });
}




function sortLH(){
    allHotel= allHotel.sort(function(a,b){
        return a.cost-b.cost;

    })
     
   appendHotel(allHotel);
}

function sortHL(){
    allHotel= allHotel.sort(function(a,b){
        return b.cost-a.cost;
        
    })
     
   appendHotel(allHotel);
}


function filter(){
    let query= document.getElementById("query").value;

    let copy_data=data;
    copy_data=copy_data.filter(function(el){
        return el.category.toLowerCase().includes(query)
    });
    appendProduct(copy_data);
}
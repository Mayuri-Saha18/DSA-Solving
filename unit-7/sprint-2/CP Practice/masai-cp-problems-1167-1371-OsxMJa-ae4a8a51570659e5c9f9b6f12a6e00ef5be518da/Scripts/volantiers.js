// Write code related to Volatiers Page

let data=JSON.parse(localStorage.getItem("Helpers")) || [];

appendData(data);


function appendData(data){
    let tbody=document.querySelector("tbody");
    tbody.innerHTML="";

    data.forEach((el,i) => {
        
        if(el.type==="Volantier"){

            let tr=document.createElement("tr");

            let td1=document.createElement("td");
            td1.innerText=el.name;
            
            let td2=document.createElement("td");
            td2.innerText=el.number;

            let td3=document.createElement("td");
            td3.innerText=el.email;

            let td4=document.createElement("td");
            td4.innerText=el.category;

            let td5=document.createElement("td");
            let btn=document.createElement("button");
            btn.innerText="Delete";
            btn.onclick=()=>deleteData(i);
            td5.append(btn);

            tr.append(td1,td2,td3,td4,td5);

            tbody.append(tr);

        }

    });
}


function deleteData(i){
    data.splice(i,1);
    localStorage.setItem("Helpers", JSON.stringify(data));

    window.location.reload();
}


function filterData(event) {
    const { value } = event.target

    if(value===""){
        appendData(data);
    }
    else{
        let filterData=data.filter((el)=>el.category==value);
        appendData(filterData);
    }
}
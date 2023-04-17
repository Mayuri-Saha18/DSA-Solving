

let getLeaveData=JSON.parse(localStorage.getItem("leaveDetails"));
leaveRequestDetails(getLeaveData);

function leaveRequestDetails(getLeaveData){

    getLeaveData.forEach(function(el){
        let tr=document.createElement("tr");

        let td1=document.createElement("td");
        td1.innerText=el.userUniqueId
        
        let td2=document.createElement("td");
        td2.innerText=el.userName


        let td3=document.createElement("td");
        td3.innerText=el.userReasonLeave

        let td4=document.createElement("td");
        td4.innerText=el.userDesignation

        let td5=document.createElement("td");
        td5.innerText=el.userStartDate

        let td6=document.createElement("td");
        td6.innerText=el.userEndDate

        let td7=document.createElement("td");
        td7.innerText=el.userOverseer;


        let td8=document.createElement("td");
        let grant=document.createElement("button");
        grant.innerHTML="Grant";
        grant.setAttribute("class","grant");
        grant.addEventListener("click",function(){
            // alert("a")

            let modelSpan=document.createElement("div");
            let divGrant=document.getElementById("details")

            let header=document.createElement("h1");
            header.innerText="Leave Application";

            let appName=document.createElement("h3");
            appName.innerText=el.userName;

            let appover=document.createElement("h3")
            appover.innerText=el.userOverseer;

            let appStart=document.createElement("h4")
            appStart.innerText=el.userStartDate

            let appEnd=document.createElement("h4")
            appEnd.innerText=el.userEndDate

            let inputOTP=document.createElement("input");

            let veriBTN=document.createElement("button");
            veriBTN.innerHTML="Verify OTP";
            veriBTN.addEventListener("click",function(){
                if(inputOTP.value===el.otp){
                    alert("OTP Verify, Leave Approved");
                }
                else{
                    alert("Wrong OTP");
                }
            });

            modelSpan.append(appName,appover,appStart,appEnd,inputOTP,veriBTN);

            divGrant.append(modelSpan);

            divGrant.style.display="block";

        });

        td8.append(grant);

        let td9=document.createElement("td");
        let reject=document.createElement("button");
        reject.innerHTML="reject";
        reject.setAttribute("id","reject")
        reject.addEventListener("click",function(index){
            getLeaveData.splice(index,1);

            localStorage.setItem("leaveDetails",JSON.stringify(getLeaveData));
            window.location.reload();

            
        });

        td9.append(reject);

        
        let td10=document.createElement("td");
        td10.innerText=el.otp;

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10);

        document.querySelector("tbody").append(tr);


    })
}

function search(){
    let query=document.getElementById("query").value;

    let searchData=getLeaveData;

    searchData=searchData.filter(function(el){
        return el.userName.toLowerCase().includes(query);
    });

    leaveRequestDetails(searchData);

}


function handleFilter(event){
    let {value}=event.target;

    if(value==="all"){
        leaveRequestDetails(getLeaveData)
    }
    else{
        let data=getLeaveData.filter((el)=>el.userDesignation===value);
        leaveRequestDetails(data);
    }
}



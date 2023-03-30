function runProgram(input) {
    
    input=input.trim().split("\n")
    
    let [n,l]=input[0].trim().split(" ").map(Number)
    
    let str=input[1].trim()
    
    let query=input.slice(2).map((q)=>q.trim().split(" ").map(Number))
    
    for(let i=0;i<query.length;i++){
        
        let [start,end]=query[i]
        
        let sum=0
        
        for(let j=start-1;j<end;j++){
            
            let c=str[j]
            
            if(c==="a"){
                
                sum+=1
            }
            
            else if(c==="e"){
                sum+=2
            }else if(c==="i"){
                sum+=3
            }else if(c==="o"){
                sum+=4
            }else if(c==="u"){
                sum+=5
            }
        }
        
        console.log(sum)
    }
  }
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    let obj={}
    for(let i=0;i<tc;i++){
        let arr=input[line++].trim().split(" ").map(Number)
        
        if(arr[0]===1){
            
            if(obj[arr[1]]===undefined){
                obj[arr[1]]=1
            }else{
                obj[arr[1]]++
            }
        }
        
        else if(arr[0]===2){
            
            
             if(obj[arr[1]]){
                 
                obj[arr[1]]= obj[arr[1]]-1
            }
        }
        
        else if(arr[0]===3){
            
            
            let flag=false;
            
            
            for(let key in obj){
                
                if(obj[key]===arr[1]){
                    flag=true
                    break
                }else{
                    flag=false
                }
            }
            
            
            flag?console.log(1):console.log(0)
        }
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
  
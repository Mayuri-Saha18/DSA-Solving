function runProgram(input) {
    
    input=input.trim().split("\n")
    let n=input[0].trim().split(" ").map(Number)
    
    let x=n[0]
    let y=n[1]
    
    
    let arr=input[1].trim().split(" ").map(Number)
    
    let t=0
    
    let flag=true
    
    while(flag){
        for(let i=0;i<arr.length;i++){
            
            if(arr[i]!=0){
                
                t++
                
                let c=arr[i]
                
                arr[i]=c-1
            }
            
            if(arr[y-1]==0){
                
                flag=false
                
                break
            }
        }
    }
    
    console.log(t)
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
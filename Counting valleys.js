function runProgram(input) {
    input=input.trim().split("\n")
    
    let n=+input[0]
    let str=input[1].trim()
    let count=0
    
    
    
    let ans=0
    
    for(let i=0;i<n;i++){
        if(str[i]=="U"){
            
            count++
        }
        if(str[i]=="D"){
            
            count--
        }
        
        if(count===0 && (str[i]=="U")){
            
            ans++
        }
    }
    
    console.log(ans)
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
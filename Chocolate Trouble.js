function chocolate(x,y){
    while(x>0 && y>0){
        if(x<y){
            y%=x
            
        }else{
            x%=y
        }
    }  
    console.log((x+y)*2)
   }
   function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let [x,y]=input[line++].trim().split(" ").map(Number)
        chocolate(x,y)
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
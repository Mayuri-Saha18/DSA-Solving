function moves(n,str){
    
    let s=0
    let c=0
    
    for(let i=0;i<n;i++){
        
        
        if(str[i]==="("){
            s++
        }
        else if(str[i]===")"){
            
            s--
            
            if(s<0){
                
                c++
                s++
            }
        }
    }
    console.log(c)
}
function runProgram(input) {
  input=input.trim().split("\n")
  
  let tc=+input[0]
  let line=1
  
  for(let i=0;i<tc;i++){
      let n=+input[line++]
      let str=input[line++]
      
      moves(n,str)
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
function balanced(n,str){
    
    let stack=[]
    
    let open="abcdefghijklmnopqrstuvwxyz"
    
    let close="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for(let i=0;i<str.length;i++){
        
        let x=str[i]
        
        if(open.includes(x)){
            stack.push(x)
        }else if(close.includes(x)){
            let y=stack.pop()
            if(y!==open[close.indexOf(x)]){
            return ("False")
            }
        }
    }
    
    
    if(stack.length===0){
    return ("True")
    }else{
        return ("False")
    }
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  
  for(let i=0;i<tc;i++){
      let n=input[line++]
      let str=input[line++].trim()
      
      console.log(balanced(n,str))
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

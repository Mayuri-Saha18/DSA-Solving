function support(n,arr){
    let stack=[]
    for(let i=0;i<n;i++){
        
        let c=arr.charAt(i)
        
        if(stack.length && c==="A"){
            stack.pop()
        }
        
        else if(c==="Q"){
        stack.push(c)
        }
    }
    if(!stack.length){
        
        console.log("Yes")
        
    }
    else{
        console.log("No")
    }
    
}
function runProgram(input) {
  input=input.trim().split("\n")
  
  let tc=+input[0]
  let line=1
  
  for(let i=0;i<tc;i++){
      let n=input[line++].trim().split(" ").map(Number)
      let arr=input[line++]
      
      support(n,arr)
      
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
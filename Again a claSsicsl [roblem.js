function balanced(str){
    let stack=[]
    let obj={
        "}":"{",
        ")":"(",
        "]":"["
    };
    for(let i=0;i<str.length;i++){
        let symbol=str[i];
        if(symbol=="(" || symbol=="[" || symbol=="{"){
        stack.push(symbol)
    }else{
        if(obj[symbol]==stack[stack.length-1])
        {
            stack.pop()
        }
        else{
            return "not balanced"
        }
    }
    }
    if(stack.length==0){
        return "balanced";
    } else{
        return "not balanced"
    }
    
}


function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0]
    for(let i=1;i<=tc;i++){
        let str=input[i].trim().split("")
        console.log(balanced(str))
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
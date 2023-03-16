function solve(n,str){
    let stack=[]
    for(let i=0;i<str.length;i++){
        if(stack[stack.length-1]==str[i]){
            stack.pop()
        }else{
            stack.push(str[i])
        }
    }
    if(stack.length==0){
        console.log(-1)
    }else{
        bag=""
        for(let i=0;i<stack.length;i++){
            bag+=stack[i]
        }
        console.log(bag)
    }
}

function runProgram(input) {
  input=input.trim().split("\n")
  let n=+input[0]
  let str=input[1].trim()
  solve(n,str)
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
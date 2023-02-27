function remove(n,str){
    let stack=[]
    let top=-1
    for(let i=0;i<str.length;i++){
        if(stack.length<0 || stack[top]!==str[i]){
            top++
            stack.push(str[i])
        }else if(stack.length>0 && stack[top]===str[i]){
                stack.pop()
                top--
            
        }
    }
    console.log(stack.join(""))
}
function runProgram(input) {
   input=input.trim().split("\n")
    let tc=+input[0]
    let line=1;
   
    for(let i=0;i<tc;i++){
    let n=+input[line++].trim().split(" ")
    let str=input[line++].trim().split("")
    remove(n,str)
        
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
function smaller(arr){
    let stack=[];
    let result=[];
    for(let i=0; i<arr.length;i++){
        let min=-1;
        while(stack.length !=0){
            if(arr[i]>stack[stack.length-1]){
                min=stack[stack.length-1];
                break;
            }else{
                stack.pop()
                
            }
        }
            result.push(min);
            stack.push(arr[i])
        }
        return result.join(" ")
    
}

function runProgram(input) {
    let Input=input.trim().split("\n")
    let arr=Input[1].split(" ").map(Number)
    console.log(smaller(arr))
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
function valid(arr1,arr2){
    let stack=[]
    let l=0;
    let r=0;
    while(l<arr1.length && r<arr2.length){
        if(stack.length!=0 && stack[stack.length-1]==arr2[r]){
            stack.pop()
            r++
        }else{
            stack.push(arr1[l])
            l++
        }
    }
    while(stack.length!=0 && arr2[r]==stack[stack.length-1]){
        stack.pop()
        r++
    }
    return stack.length===0?true:false;
}

function runProgram(input) {
    input=input.trim().split("\n")
let tc=input[0]
let line=1;
for(let i=0;i<tc;i++){
    let n=input[line++].trim().split(" ").map(Number)
    let arr1=input[line++].trim().split(" ").map(Number)
    let arr2=input[line++].trim().split(" ").map(Number)
    valid(arr1,arr2)
    if(valid(arr1,arr2)===true){
        console.log("YES")
    }
    else{
        console.log("NO")
    }
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
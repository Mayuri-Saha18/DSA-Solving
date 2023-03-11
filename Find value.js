function value(n,str){
    let lower="abcdefghijklmnopqrstuvwxyz"
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let total=0
    for(let i=0;i<n;i++){
        for(let j=0;j<lower.length;j++){
            if(str[i]==lower[j]){
            
            
            total+=j+1
            }
            
        else if(str[i]==upper[j]){
            total-=j+1
        }
        }
    }
    console.log(total)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let n=input[0].trim().split(" ").map(Number)
  let str=input[1]
  value(n,str)
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
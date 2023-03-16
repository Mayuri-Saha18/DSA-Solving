function near(n,m,str){
    let left=0
    let right=n-1
    while(left<right){
        if(str[left]!==str[right]){
            m--
        }
        left++
        
        right--
    }
    if(m>=0){
        console.log("True")
    }else{
        console.log("False")
    }
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
      let [n,m]=input[line++].trim().split(" ").map(Number)
      let str=input[line++]
      near(n,m,str)
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
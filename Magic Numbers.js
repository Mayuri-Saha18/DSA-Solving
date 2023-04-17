function magic(n){
    if(n%4===0 || n%7===0){
        return "YES"
    }
    if(n.toString().includes("4") && n.toString().includes("7")){
        return "YES"
    }
    return "NO"
}
function runProgram(input) {
  input=input.trim().split("\n")
  let n=+input[0]
  console.log(magic(n))
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
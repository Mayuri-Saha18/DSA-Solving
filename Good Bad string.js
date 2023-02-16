function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+(input[0])
    for(let i=1;i<=tc;i++){
        let str=input[i]
        let bag="";
        for(let j=0;j<str.length;j++){
            if(str[j]===str[j+1]){
                bag+=""
            }else{
                bag+=str[j]
            }
        }
        console.log(bag)
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
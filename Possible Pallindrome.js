function perm(str){
    let d={};
    for(let i=0;i<str.length;i++){
        if(d[str[i]]===undefined){
            d[str[i]]=1
        }
        else{
            d[str[i]]+=1
        }
    }
    let c=0;
    for(let i in d){
        if(d[i]%2!=0){
            c++
        }
    }
    if(c===1 || c===0){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

function runProgram(input) {
    input=input.trim().split("\n")

    let tc=+(input[0])
    let line=1;
    for(let i=0;i<tc;i++){
        let str=input[line++]
        perm(str)
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
function smart(n,str1,str2){
    let a=[]
    let b=[]
    
    for(let i=0;i<n;i++){
        if(str1[i]=="#"){
        b.pop()
        }else{
            b.push(str1[i])
        }
    }
    for(let i=0;i<n;i++){
        if(str2[i]=="#"){
            a.pop()
        }else{
            a.push(str2[i])
        }
    }
    if(b.join(" ")===a.join(" ")){
        console.log("CORRECT")
    }else{
        console.log("WRONG")
    }
  }
  function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let n=+input[line++]
        let str1=input[line++]
        let str2=input[line++]
        smart(n,str1,str2)
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
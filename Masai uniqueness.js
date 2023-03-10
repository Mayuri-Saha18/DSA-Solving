function unique(str){
    let obj={}
    let flag=false
    for(let i=0;i<str.length;i++){
        let x=str[i]
        if(obj[x]===undefined){
            obj[x]=1
        }else{
            obj[x]++
        }
    }
    for(let key in obj){
        if(obj[key]>1){
            flag=true
            break
        }
    }
    if(flag){
        console.log("NO")
    }else{
        console.log("UNIQUE")
    }
    }
    function runProgram(input) {
      input=input.trim().split("\n")
      let tc=input[0]
      let line=1
      for(let i=0;i<tc;i++){
          let str=input[line++]
          unique(str)
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
    
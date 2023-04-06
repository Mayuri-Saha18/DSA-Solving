function runProgram(input) {
    
    input=input.trim().split("\n")
    let arr=input[1].trim().split(" ").map(Number)
    let arr2=input[2].trim().split(" ").map(Number)
    let move=0;
    for(let i=0;i<arr.length;i++) {
    let x=arr[i];
        for(let j=0;j<arr2.length;j++){
            if(arr2[j]==x){
                move++;
            
                arr2[j]=-1;
                break
            }else if (arr2[j]!= -1) {
                move++;
            }
        }
    }
        console.log(move-1)
        
    }
    if (process.env.USER === ""){
    runProgram(``);
    }else{
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
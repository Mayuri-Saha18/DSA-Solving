function  pyramid(n)    {

    let step=1;
    let sum=0;
    
    while(n>=step)  {
        sum++
        step=(sum+2)*(sum+1)/2
        n=n-step
    }if(n>0){
        sum++
    }
    
    console.log(sum)
    
    }
    
    
    function runProgram(input) {
       input=input.split("\n")
       let n=+input[0]
       pyramid(n)
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
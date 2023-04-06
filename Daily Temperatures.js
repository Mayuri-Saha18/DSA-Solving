function temperature(n,arr){
    let stack=[];
    let ans=[]
    
      for(let i =n-1;i>=0;i--){
            while(stack.length>0 && arr[i]>=arr[stack[stack.length-1]]){
                stack.pop();
            }
            if (stack.length===0)
            {
                ans.push(0);
            }
            else{
               let temp=stack[stack.length-1];
               temp=temp-i;
               ans.push(temp)
            }
            stack.push(i);
        }
        ans=ans.reverse()
        console.log(ans.join(" "));
    }
    function runProgram(input) {
     input=input.trim().split("\n")
    let tc=input[0]
    let line=1;
    for(let i=0;i<tc;i++){
        let n=input[line++].trim().split(" ").map(Number)
        let arr=input[line++].trim().split(" ").map(Number)
        temperature(n,arr)
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
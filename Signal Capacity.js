function signal(arr){
    let stack=[];
    let ans= [];
    let bag="";
        
    for(let i=0;i<arr.length;i++) {
        let count=1;
        
        while(stack.length!=0)  {
            if(arr[i]>=stack[stack.length-1]){
                  count+=ans[stack.length-1];
                  stack.pop();
                  ans.pop();
                }
                else break;
            }
            
            stack.push(arr[i]);
            ans.push(count);
            bag+=count+" ";
            
        }
        return bag;
        
    }
    function runProgram(input){
        
    input=input.trim().split("\n")
    let tc=+input[0]
    for(let i= 1;i< tc*2;i +=2){
    let arr= input[i+1].trim().split(" ").map(Number)
    console.log(signal(arr))
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
function Happy(n)  {

    let prev = new Set()
    
            
            while(n!==1 && !prev.has(n) )  {
                
                    
                    prev.add(n)
                    n=digitSqSum(n)
            
            
            }
            
            
    if (n===1)  {
        console.log("Yes")
    }
    else  {
        console.log("No")
    }
    }
    
    function digitSqSum(n){
        
        
    let sum=0;
    
        while(n>0){
                
          let digit=n%10
                
          sum+= digit*digit
          n=Math.floor(n/10)
                
        }
        
        
    return sum;
    
    }
    
    function runProgram(input){
        
    input=input.trim().split("\n");
    
        let tc=+input[0]
      
    let line =1
            for(let i=0;i<tc;i++)  {
                let n = +input[line++];
                Happy(n);
            }
            
        }
    
    
    if (process.env.USERNAME === "") {
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
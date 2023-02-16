function solve(str) {
    
    let count = 0;

let obj ={};
     let left = 0;
       for (let i=0;i<str.length;i++){
             
             let x=str[i];
              if (obj[x]===undefined){
        
                obj[x]=1;
              }
        else  {
            obj[x]++;
        }
        while (obj[x]>2) {
            
            let num=str[left];
            obj[num]--;
            
            left++;
        }
    count+=i-left+1;
    }
return count;
}

function runProgram(input) {
let Input=input.split("\n");

let tc=+(Input[0]);
    let ans = [];
  
  for (let i = 1; i <tc * 2; i += 2) {
        
        let str = Input[i + 1].trim();
        ans.push(solve(str));
    }

console.log(ans.join("\n"));
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
function runProgram(input) {
    input = input.trim().split("\n");
    let test =+input[0];
    let line =1;
    for(let i=0; i<test;i++){
let N =+input[line++];
let arr =input[line++].trim().split(" ").map(Number);
match(N,arr)
    }
  }
function match(N,arr){
      var count =0;
      let ab =0;
      let vir =0;
      let ans ="a";
for(let i=0; i<arr.length;i++){
        
        if(count===6){
            count=0;
            if(ans==="a"){
                ans="v"
            }else{
                ans="a"
            }
        }
    if(ans==="a"){
        ab=ab+arr[i];
        count++;
    if(arr[i]%2!=0){
        ans="v"
    }
}

else{
    vir =vir+arr[i];
    count++;
    if(arr[i]%2!=0){
        ans="a"
    }
}
}

if(ab>vir){
    
       console.log("AB de Villiers")
   }
   else if(vir>ab){
       console.log("Virat Kohli")
   }
   else{
       console.log("Tie")
   }
  }
if (process.env.USER=== "") {
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
      process.exit(0) ;
    });
  }
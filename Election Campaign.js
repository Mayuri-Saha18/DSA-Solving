function  Electioncampaign(N,arr){
   
    let max=-Infinity;
    for(let i=0;i<N;i++){
        for(j=i+1;j<N;j++){
           let distance= j-i;
           
   let temp=distance*Math.min(arr[j],arr[i]);
   
       max=Math.max(temp,max);  
       
    }
  }
  console.log(max);

} 

function runProgram(input) {
   input = input.trim().split("\n")
   let tc = +input[0]
   let line = 1
   for(let i=0;i<tc;i++){
       let N = +input[line++]
       let arr = input[line++].trim().split(" ").map(Number)
       Electioncampaign(N,arr)
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
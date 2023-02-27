function runProgram(input) {
    input=input.trim().split("\n")
     for(let i=0;i<input.length;i++){
         input[i]=input[i].trim().split(" ").map(Number)
     }
     // console.log(input)
     let [row,col]=input[0]
     input.shift()
     // console.log(row,col)
     
     let sum1=0;
     let sum2=0;
     
     for(let i=Math.floor(row/2);i<=Math.floor(row/2);i++){
         // console.log(input[i])
         for(let j=0;j<col;j++){
             sum1+=input[i][j]
         }
     }
     for(let i=0;i<row;i++){
         if(i<Math.floor(row/2)){
             sum1+=input[i][0]
         }else if(i>Math.floor(row/2)){
             sum1+=input[i][col-1]
         }
     }
     // console.log(sum1)
     
     for(let i=0;i<row;i++){
         
             sum2+=input[i][Math.floor(col/2)]
         
     }
     for(let i=0;i<col;i++){
         if(i>Math.floor(col/2)){
             sum2+=input[0][i]
         }
         else if(i<Math.floor(col/2)){
             sum2+=input[row-1][i]
         }
     }
     //  console.log(sum2)
   console.log(Math.abs(sum1-sum2)) 
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
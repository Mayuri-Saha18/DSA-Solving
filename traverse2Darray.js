function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N,M] = input[0].trim().split(" ").map(Number);
    
    let line = 1;
    let matrix =[];
    for(let i = 0; i < N; i++) {
 let temp = input[line++].trim().split(" ").map(Number);
 matrix.push(temp);
    }
  traverse2dArray(N, M, matrix)

   
  }
  function traverse2dArray(N, M, matrix){
    //write code here
    let output ="";
    // for first question 
//     for(let c =0;c<M;c++){
//     for(let r=N-1;r>=0;r--){
//    output =output + matrix[r][c]+" ";
//         }
//     }
// second question 
for(let c =M-1;c>=0;c--){
        for(let r=0;r<N;r++){
       output =output + matrix[r][c]+" ";
            }
        }
    console.log(output);
  
}
  if (process.env.USER=== "mayuri") {
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
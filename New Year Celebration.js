
function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    var stack=[];
    var queue=[];
    for(var i=0;i<tc;i++){
        var ab=input[line].split(" ").map(Number);
        if(ab[0]==1){
            queue.push(ab[1]);
        }
        if(ab[0]==2){
            stack.push(ab[1]);
        }
        if(ab[0]==3){
            if(queue.length==0){
                console.log(-1);
            }
            else{
                console.log(queue[0]);
            }
        }
        if(ab[0]==4){
            if(stack.length==0){
                console.log(-1);
            }
            else{
                console.log(stack[stack.length-1]);
            }
        }
        if(ab[0]==5){
            if(queue.length==0){
                console.log(-1);
            }
            else{
                stack.push(queue[0]);
               queue=queue.slice(1,queue.length);
            }
        }
        line++;
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
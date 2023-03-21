function pet(a,b,c,x,y){
    x=x-a
    if(x>0){
        if(x<=c){
            c-=x
            x=0
        }else{
            return "NO"
        }
    }
    y=y-b
    if(y>0){
        if(y<=c){
            c-=y
            y=0
            
        }else{
            return "NO"
        }
    }
    return "YES"
 }
 function runProgram(input) {
   input=input.trim().split("\n")
   let tc=+input[0]
   let line=1
   for(let i=0;i<tc;i++){
       let [a,b,c,x,y]=input[line++].trim().split(" ").map(Number)
       console.log(pet(a,b,c,x,y))
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
 
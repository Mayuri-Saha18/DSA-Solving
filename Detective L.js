function traverse(r,c,mat){
    
    let right=0;
    let bottom=0;
    let bag=""
    
    
  for(let k=0;k<c;k++){

        for(let i=0+right;i<c;i++){
            for(let j=0;j<r-right;j++){
                bag+=mat[j][i]+" "
            }
            break;
        }
        
        right++;
        for(let i=r-1-bottom;i>=0;i--){
            for(let j=bottom+1;j<c;j++){
                bag+=mat[i][j]+" "
            }
            break;
        }
        bottom++
    }
    console.log(bag)
}
function runProgram(input) {
input=input.trim().split("\n")
let i=1;
while(i<input.length){
    let [r,c]=input[i].trim().split(" ").map(Number)
    
    let mat=[]
        for(let j=0;j<r;j++){
         mat.push(input[i+j+1].trim().split(" "))
        
            
        }
           traverse(r,c,mat)
           i+=r+1;
    }
  }
if (process.env.USER === "") {
        runProgram(``);
}else {
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
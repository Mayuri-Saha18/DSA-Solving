function negation(n,m,mat){
    let sum=0
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            sum+=mat[i][j]
            
        }
    }
    let diff=0
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<m;j++){
            diff=(sum-mat[i][j])
            bag+=diff+" "
        }
        console.log(bag)
    }
}
function runProgram(input) {
  input=input.trim().split("\n")
  let [n,m]=input[0].trim().split(" ").map(Number)
  let line=1
  let mat=[]
  for(let i=0;i<n;i++){
      mat.push(input[line].trim().split(" ").map(Number))
      line++
  }
  negation(n,m,mat)
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
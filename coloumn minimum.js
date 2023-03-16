function traverse(n,m,mat){
    let bag=""
    for(let j=0;j<m;j++)
    {
        let min=Infinity
        for(let i=0;i<n;i++){
            if(mat[i][j]<min){
                min=mat[i][j]
            }
        }
        bag+=min+" "
    }
    console.log(bag)
}

function runProgram(input) {
  input=input.trim().split("\n")
  let [n,m]=input[0].trim().split(" ").map(Number)
  let line=1;
  let mat=[]
  for(let i=0;i<n;i++){
      mat.push(input[line++].trim().split(" ").map(Number))
  }
  traverse(n,m,mat)
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

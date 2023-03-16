function oddElement(N,M,arr) {
    function oddOne(arr,row,col) {
        let ans1 = arr.length;
        let ans2 = arr[0].length;
        
        let res = 0;
        
        if (row > 0 && arr[row-1][col] % 2 !== 0) {
            res++;
        }
        if (row < ans1-1 && arr[row+1][col] % 2 !== 0) {
            res++;
        }
        if (col > 0 && arr[row][col-1] % 2 !== 0) {
            res++;
        }
        if (col < ans2-1 && arr[row][col+1] % 2 !== 0) {
            res++;
        }
        return res >= 2;
    }
    
    for(let row=0; row<N; row++){
        for(let col=0; col<M; col++){
            if (oddOne(arr,row,col)) {
                arr[row][col] = -arr[row][col];
            }
        }
    }
    for(let row=0; row<N; row++){
        let res = '';
        for(let col=0; col<M; col++){
            res = res + arr[row][col] + ' ';
        }
        console.log(res);
    }
}
function runProgram(input) {
  input=input.trim().split("\n")
  let [N,M]=input[0].trim().split(" ").map(Number)
  let line=1
  let arr=[]
  for(let i=0;i<N;i++){
      arr.push(input[line++].trim().split(" ").map(Number))
  }
  oddElement(N,M,arr)
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
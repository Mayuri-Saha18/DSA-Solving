function remove(n,arr){
    let arr1=[arr[0]]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>=arr1[arr1.length-1]){
            arr1.push(arr[i])
            
        }
    }
    console.log(arr1.join(" "))
}
function runProgram(input) {
 input=input.trim().split("\n")
 let n=input[0]
 let arr=input[1].trim().split(" ").map(Number)
 remove(n,arr)
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

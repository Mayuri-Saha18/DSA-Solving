function sales(n,arr1){
    let sum=0;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr1[j]>arr1[j+1]){
                let temp=arr1[j]
                arr1[j]=arr1[j+1]
                arr1[j+1]=temp
            }
        }
    }
    for(let i=0;i<n;i++){
        if(arr1[i]===arr1[i+1]){
            sum++
            i++
        }
    }
    console.log(sum)
}

function runProgram(input) {
    input=input.trim().split("\n")

    let n=+(input[0])
    let arr1=input[1].trim().split(" ").map(Number)
    sales(n,arr1)

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
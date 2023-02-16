function sumOfDigits(n) {
    
    let sum = 0;
  
  while(n>0){
      
          sum+=n%10;
          
          n = Math.floor(n / 10);
      
    }
    
    return sum
  }
  
  function compareNumbers(a, b){
    const sumA=sumOfDigits(a);
    
  const sumB = sumOfDigits(b);
    if (sumA !== sumB) {
      return sumA - sumB;
    } 
    
    else {
      return a - b;
    }
    
  }
  
  function  runProgram(input) {
      input= input.trim().split('\n');
   let  t =+input[0];
   let results = '';
    let index = 1;
    
    for (let i = 0; i < t; i++) {
      const n =+input[index++];
      const arr=input[index++].trim().split(' ').map(Number);
  arr.sort(compareNumbers);
  
       results += arr.join(' ') + '\n';
    }
    
    console.log(results)
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
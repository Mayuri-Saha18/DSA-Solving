function anagram(str1,str2){
    
    
    const freqA=new Array(26).fill(0); 
    
    
   const freqB=new Array(26).fill(0); 
 
 
   for (let i=0;i<str1.length;i++){
       
       
     const c=str1.charAt(i);
     
     
     freqA[c.charCodeAt(0)-'a'.charCodeAt(0)]++;
     
     
   }
 
   for (let i=0;i<str2.length;i++){
       
       
     const c=str2.charAt(i);
     
     freqB[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
     
     
   }
 
   let deletions=0;
   
   for (let i=0;i<26;i++){
       
     deletions+=Math.abs(freqA[i]-freqB[i]); 
   }
   console.log(deletions);
     
 
 }
 function runProgram(input) {
   input=input.trim().split("\n")
   let str1=input[0]
   let str2=input[1]
   anagram(str1,str2)
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
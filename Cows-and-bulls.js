function  cowbulls(n,str1,str2){
    // console.log(n,str1,str2)
    let obj={
        
    }
    let cow=0;
    let buuls=0
    for(let z=0;z<n;z++){
        if(obj[str1[z]]==undefined){
            obj[str1[z]]=1
        }else{
            obj[str1[z]]++
        }
    }
    
    // console.log(obj)
    for(let z=0;z<n;z++){
        if(obj[str2[z]]){
            cow=cow+1
            obj[str2[z]]-=1
        }if(str1[z]==str2[z]){
            buuls+=1
        }
    }
    let gu=cow-buuls
    console.log(buuls+"A"+gu+"B")
}
function runProgram(input) {
  // Write code here
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let u=0;u<tc;u++){
      let n=+input[line++]
      let str1=input[line++].trim()
      let str2=input[line++].trim()
      cowbulls(n,str1,str2)
  }
}


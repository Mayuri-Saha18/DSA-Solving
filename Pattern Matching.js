function patternMatching(n,m,str,pat){
   let st=-1
   
   let e=-1
   
   for(let i=0;i<str.length;i++){
       let sub=str.substring(i,i+pat.length)
       
       if(sub===pat){
           
           st=i
           e=i+pat.length-1
           console.log(`${st} ${e}`)
           return
       }
   }
   
    console.log(-1)
}

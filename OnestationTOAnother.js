function station1to2(N, A, S, D){
    let mult=0
    let count=0
for(let i=0;i<N;i++){
   if(A[i]===S){
       mult=i
   }
   if(A[i]===D){
       count=i
   }
}

let diff=count-mult
console.log(diff*5*7)

}

function traverse2dArray(N, M, matrix){
     let bag="";
    for(let i=M-1;i>=0;i--){
        for(let j=0;j<N;j++){
            bag+=matrix[j][i]+" ";
        }
    }
  console.log(bag)
  
}
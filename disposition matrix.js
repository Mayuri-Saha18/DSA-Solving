function disposition(N,M, mat){
 
    let vowel=["a","e","i","o","u"]
    let consonant=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    for(let i=0;i<N;i++){
        let bag=""
        
        for(let j=0;j<M;j++){
            
            if(vowel.includes(mat[i][j])){
                mat[i][j]=0
                bag=bag+mat[i][j]+" "
            }else{
                let index=consonant.indexOf(mat[i][j])+1
                mat[i][j]=index;
                bag=bag+mat[i][j]+" "
            }
        }
           console.log(bag)
        }
   }
   
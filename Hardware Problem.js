function hardwareProblem(N,D,T){
    let prev={}
    let double=-1
    
    for(let i=0;i<T.length;i++){
        
        let current=T[i]
        
        if(current-prev<=D){
            
            double=current
            
            break
        }
        
        prev=current
    }
    console.log(double)
  }
  
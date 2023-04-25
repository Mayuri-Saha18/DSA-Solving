function socks(N, A){
    
    let pair={}
    let c=0
    
    for(let i=0;i<N;i++){
        let color=A[i]
        
        if(!pair[color]){
            pair[color]=1
        }else{
            
            c++
            pair[color]=0
        }
    }
    console.log(c)
}

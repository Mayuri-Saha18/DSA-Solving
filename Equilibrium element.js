function equilibriumElement(N, arr){
    let sum=0;
    for(let i=0;i<N;i++){
        sum+=arr[i]
    }
        let result=0;
        let flag=true;
        for(let i=0;i<N;i++){
            result+=arr[i]
        
        if((sum-result-arr[i+1])==result){
            console.log(i+2)
            flag=false;
            break;
        }
        }
        if(flag){
            console.log(-1)
        }
}
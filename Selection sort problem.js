function solve(N,arr){
    let min;
    let temp;
    for(let i=0;i<N-1;i++){
        min=i;
        for(let j=i+1;j<N;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }
        temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
        
    }
    
     printing(arr,N)
}

let bag="";
function printing(arr,N){
    for(let i=0;i<N;i++){
        bag+=arr[i]+" "
        
    }
    console.log(bag)
}

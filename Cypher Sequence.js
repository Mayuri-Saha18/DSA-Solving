let sum="";
    for(let i=0; i<arr.length; i++){
        let k=arr[i];
        for(let j=0; j<mat[i].length; j++){
            if(mat[i][j]=="D"){
                if(k==9) k=k-k;
                else k=k+1;
            }
            else{
                if(k==0) k=k+9
                else k=k-1;
            }
        }
        sum=sum+k;
    }
    console.log(sum)
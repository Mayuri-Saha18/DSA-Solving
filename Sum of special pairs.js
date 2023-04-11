function sumOfSpecialPairs(N,A){
    let sum=0;
for(let i=0;i<=N-2;i++){
    for(let j=i+1;j<=N-1;j++){
        if (checkPrime(j-i)){
            sum+=Math.abs(A[i]-A[j])
        }
    }
}
console.log(sum);
}
function checkPrime(N){
if(N<=1) return false;
{
    for(let i=2;i<= Math.sqrt(N);i++){
        if(N%i==0){
        return false;
        }
    }
    return true;
}

}
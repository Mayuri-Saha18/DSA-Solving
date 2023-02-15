
var index=-1;
var d=0;
var sum=0;
for(i=0;i<N;i++)
{
    sum=sum+A[i];
}
for(j=0;j<A.length;j++)
{
    if((sum-A[j])%7==0)
    {
        if(A[j]<d||index==-1)
        {
            d=A[j];
            index=j;
        }
    }
}
console.log(index);
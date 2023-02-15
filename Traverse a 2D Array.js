
var bag="";
for(var i=0;i<M;i++)
{
    for(var j=N-1;j>=0;j++)
    {
        bag+=arr[j][i];
    }
}
console.log(bag);
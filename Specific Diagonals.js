
var kr=0;
var kc=0;
for(var i=0;i<R;i++)
{
    for(var j=0;j<C;j++)
    {
        if(arr[i][j]==K)
        {
            kr=i;
            kc=j;
        }
    }
}
var sum =kr+kc;
var sub=kr-kc;
var bag1=""; // primary diagonal
var bag2=""; // secondary diagonal
for(var k=0;k<R;k++)
{
    for(var l=0;l<C;l++)
    {
        if(sub==k-l)
        {
            bag1+=arr[k][l]+" ";
        }
    }
    for(var m=0;m<C;m++)
    {
        if(sum=k+m)
        {
            bag2+=arr[k][m]+" ";
        }
    }
}

console.log(bag1);
console.log(bag2);
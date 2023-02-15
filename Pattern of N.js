
var N=5;
var count=1;
for(var i=1;i<=N;i++)
{
    var bag="";
    for(var j=1;j<=N;j++)
    {
        bag+=count+" ";
        count++;
    }
    console.log(bag);
}
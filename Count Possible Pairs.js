
var count = 0;
for (i = 0; i <= n; i++) 
{
    for (j = 0; j <= m; j++) 
    {
        if (((i * i) + j == n) && ((j * j) + i == m)) 
        {
            count++;
        }
    }
}
console.log(count);
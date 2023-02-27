var sortBinaryList = function (head) {
    let cur=head;
    let bag=0;
    while(cur)   {
        
        if(cur.data===0){
            bag++
        }
        cur=cur.next;
    }
    
cur=head
while(bag>0){
    cur.data=0;
    cur=cur.next;
    bag--
}

while(cur)   {
    cur.data=1
    cur=cur.next
}

return head



};
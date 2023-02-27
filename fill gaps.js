const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {

var node=new LinkedListNode(0);
    var cur=node;
    var current=head;

 while(current!=null&&current.next!=null){
       
        var d=Math.abs(current.data-current.next.data);
         for(var i=current.data;i<current.data+d;i++){
                    
                    cur.next=new LinkedListNode(i);
                    cur=cur.next;
        }
        current=current.next;
       }

 cur.next=current;
  return node.next;
};

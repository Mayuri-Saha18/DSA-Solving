function deleteKthNodeFromEnd(head, k) {
    let slow = head;
    let fast = head;
  
    // Move the fast pointer k nodes ahead of the slow pointer
    for (let i = 0; i < k; i++) {
      fast = fast.next;
    }
  
    // If the fast pointer is null, it means the kth node is the head
    if (fast == null) {
      return head.next;
    }
  
    // Move both pointers until the fast pointer reaches the end of the list
    while (fast.next != null) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // The slow pointer is now pointing to the node before the kth node from the end
    slow.next = slow.next.next;
  
    return head;
  }
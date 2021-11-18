function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    if (head===null) return 0;
    let count = 1;
    let iter = head.next;
    while(iter){
        count++;
        iter = iter.next;
    }
    return count;
}

function count(head, data) {
    if (head===null) return 0;
    let count = 0;
    let iter = head;
    while(iter){
        if (iter.data === data) count++;
        iter = iter.next;
    }
    return count;
}
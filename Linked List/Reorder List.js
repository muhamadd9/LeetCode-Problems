var reorderList = function(head) {
    if (!head || !head.next) return head;

    let arr = [];
    let temp = head;

    while (temp !== null) {
        arr.push(temp.val);
        temp = temp.next;
    }

    let length = arr.length;
    let mid = Math.floor(length / 2);
    let reorderedArr = [];

    for (let i = 0; i < mid; i++) {
        reorderedArr.push(arr[i]);
        reorderedArr.push(arr[length - 1 - i]);
    }

    if (length % 2 !== 0) {
        reorderedArr.push(arr[mid]);
    }

    temp = head;
    for (let i = 0; i < reorderedArr.length; i++) {
        temp.val = reorderedArr[i];
        temp = temp.next;
    }

    return head;
};

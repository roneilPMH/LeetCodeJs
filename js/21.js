/**
 * 21. Merge Two Sorted Lists
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode(0);
    var ptr = head;
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            ptr.next = l1;
            l1 = l1.next;
        }else {
            ptr.next = l2;
            l2 = l2.next;
        }
        ptr = ptr.next;
    }
    if (l1 === null) ptr.next = l2;
    if (l2 === null) ptr.next = l1;
    return head.next;
};
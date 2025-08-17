import CircularSinglyLinkedList from "./circularSLL";
import DoublyLinkedList from "./doublyLinkedLists";
import SinglyLinkedList from "./singlyLinkedList";


console.log("\n\t Tests for SinglyLinkedLists");
const list = new SinglyLinkedList<number>();
list.push(3);
list.push(4)
list.push(5)
list.push(6)
// list.reverse();
// list.remove(0);
// list.remove(-1);
// list.unshift(2);
list.add(0, 2)
console.log(list.get(0));

console.log("\n\t Tests for DoublyLinkedLists");
const DLL = new DoublyLinkedList<number>();
DLL.push(6);
DLL.push(7);
DLL.push(8)
DLL.pop();
DLL.shift();
DLL.unshift(6)
DLL.push(8);
DLL.add(2, 45);
DLL.remove(2);
DLL.set(0, 50);
DLL.reverse();
console.log(DLL.get(0));

console.log("\n\t Tests for CircularSinglyLinkedList\n");
const CSLL1 = new CircularSinglyLinkedList();
CSLL1.push(23);
CSLL1.push(32);
CSLL1.push(43);
CSLL1.push(56);
CSLL1.push(68);
CSLL1.traverse({n:3})
console.log(CSLL1);







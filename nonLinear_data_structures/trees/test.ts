import { BinarySearchTree } from "./BinarySearchTree";
import breadthFirstSearch from "./tree_traversal/BFS";
import DFS from "./tree_traversal/DFS";

const tree1 = new BinarySearchTree<number>();
tree1.add(45);
tree1.add(56)

const BSTValues = [24, 46, 34, 78, 20, 15, 21, 22, 12, 16, 8, 32, 40]
tree1.treefy(BSTValues);
tree1.printTree();
// console.log(tree1);
// console.log(tree1.get());
// console.log(tree1.get()?.left);
// console.log(tree1.get()?.right);

/**Tests for BinarySearchTree Traversal*/

const tree = new BinarySearchTree<number>();
const search = new DFS();
const testArray = [50, 30, 20, 25,15, 40, 35, 45, 70, 60, 55, 80, 65, 75, 85];

tree.treefy(testArray);
console.log("Test for Breadth First Search");
console.table(breadthFirstSearch(tree));

console.log("Test for Depth First Search");
console.table(search.inorder(tree));
console.table(search.preorder(tree));
console.table(search.postorder(tree));
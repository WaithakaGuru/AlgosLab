import { BinarySearchTree } from "./BinarySearchTree";
import breadthFirstSearch from "./tree_traversal/BFS";

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

console.log(breadthFirstSearch(tree1));
type RootType = {root?: boolean}

/**
 * @classdesc - a class to describe the form of a BinarySearchTree node
 */
class BinaryNode<T> {
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
    data: T ;
    constructor(val: T) {
        this.data = val;
        this.right = null,
        this.left = null;
    }

   add(data: T) {
        if(data > this.data) {
            if(this.right === null)  this.right = new BinaryNode(data);
            else this.right.add(data);
        }
        else if(data < this.data) {
            if(this.left === null)  this.left= new BinaryNode(data);
            else this.left.add(data);
        }
    }
}

/**
 * @classdesc - a class describing the form of a BinarySearchTree and its methods 
 */
class BinarySearchTree<T>{
    private root: BinaryNode<T> | null
    constructor() {
        this.root = null
    }

    add(data:T){
        if(!this.root) this.root = new BinaryNode(data);
        else this.root.add(data)
    }

    /**
     * A getter method for the root node - to avoid direct manipulation
     * @param root if set to true then the method returns the root node. Default value is true. 
     * @returns returns the root Node 
     */
    get(root: RootType = {root: true}) {
        return this.root
    }

    /**
     * Add values of an array to an existing BinarySearchTree or creates a new BST if no Tree is passed
     * @param treeVals An array of the values to be added to the tree
     * @returns returns the new BinarySearchTree with the array values of empty if the array is empty
     * 
     */
    treefy(treeVals: T[]) : BinarySearchTree<T>{
        if(treeVals.length !== 0)
            treeVals.forEach(val => this.add(val));
        return this
    }

    /**
     * Traverses the BinarySearchTree from Root to leave nodes and prints the Data of each value in a pretty format.
     * @returns void
     */
    printTree(): void {
        if(!this.root) console.log(`[Empty Tree!!]`);
        else(this.printPrettyTree(this.root))
    }

    private printPrettyTree(root: BinaryNode<T> | null, prefix = "", isLeft = true): void {
        if (root === null) return;

        if (root.right !== null) {
            this.printPrettyTree(root.right, prefix + (isLeft ? "│   " : "    "), false);
        }

        console.log(prefix + (isLeft ? "└── " : "┌── ") + root.data);

        if (root.left !== null) {
            this.printPrettyTree(root.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }

}

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
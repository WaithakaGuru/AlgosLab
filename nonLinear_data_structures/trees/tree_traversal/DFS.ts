import { BinaryNode, BinarySearchTree } from "../BinarySearchTree";

/**
 * @classdesc A collection of all the variations of DepthFirstSearch as methods
 * Inorder Traversal
 * PostOrder Traversal 
 * PreOrder Traversal
 */
export default class DFS{
    /**
     * Traverses the binary tree from the rootNode in manner that maintains the order in which the tree was created
     *  thus used in creating a copy of a tree.
     * @param tree The binary Tree to be traversed in the preorder Manner.
     * @returns An array of Node Values of the binaryTree Nodes traversed in the ProOrder manner.
     */
    preorder(tree: BinarySearchTree<number>): number[] {
        const result: number[] = []
        const visitStack = [tree.root];
        while(visitStack.length > 0) {
            let currentNode = visitStack.pop();
            result.push(currentNode!.data);
            if(currentNode?.right) visitStack.push(currentNode.right)
            if(currentNode?.left) visitStack.push(currentNode.left)
        }
        return result;
    }


    /**
     * Traverses a binarySearchTree/binaryTree in search a way that the list of values returned is sorted
     *  from the smallest(the first leftLeafNode) value to the largest(last rightLeafNode). 
     * @param tree The binary tree to be traversed in inorder Manner.
     * @returns An array of Node Values of the binaryTreeNodes traversed in InOrder manner.
     */
    inorder(tree: BinarySearchTree<number>): number[] {
        const result: number[] = [], visitStack = [];
        let currentNode: any = tree.root;
        while(currentNode!==null || visitStack.length > 0){
            while(currentNode!== null){
                visitStack.push(currentNode);
                currentNode = currentNode.left;
            }
            currentNode = visitStack.pop();
            result.push(currentNode!.data);
            currentNode = currentNode!.right;
        }
        return result;
    }

    /**
     * Traverses the binaryTree from the leaf nodes of right subtree to those of the left subtree
     *  moving upwardslevel by level upto the rootNode.
     * @param tree The binary tree to be traversed in postorder Manner.
     * @returns An array of Node Values of the binaryTreeNodes traversed in PostOrder manner.
     */
    postorder(tree: BinarySearchTree<number>){
        const visitStack = [tree.root], result=[];
        while(visitStack.length > 0){
            const currentNode = visitStack.pop();
            result.push(currentNode?.data);
            if(currentNode?.left) visitStack.push(currentNode?.left);
            if(currentNode?.right) visitStack.push(currentNode?.right);
        }
        return result.reverse(); 
    }
}
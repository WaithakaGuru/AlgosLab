import { BinarySearchTree } from "../BinarySearchTree";

/**
 * A tree traversal technique that visits a binary tree level by level.
 * @param tree The tree to be traversed via the breadthFirstSearch technique.  
 * @returns An array of data values of the treeNodes traverse. 
 */
export default function breadthFirstSearch(tree: BinarySearchTree<number>){
    const visitQueue = [tree.root], result = []
    while(visitQueue.length > 0){
        const current = visitQueue.shift()
        result.push(current!.data);
        if(current?.left) visitQueue.push(current.left)
        if(current?.right) visitQueue.push(current.right)
    }
    return result
}

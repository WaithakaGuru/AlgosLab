import { BinarySearchTree } from "../BinarySearchTree";

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

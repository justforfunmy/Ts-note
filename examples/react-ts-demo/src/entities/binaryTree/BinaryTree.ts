import Node from './Node';
interface IBinaryTree<T>{
    key:number;
    left?:T | null;
    right?:T | null;
    id?:number;
}
export default class BinaryTree implements IBinaryTree<Node>{
    key:number;
    left:Node|null;
    right:Node|null;
    constructor(params:number[]){
        this.key=params[0];
        this.left=null;
        this.right=null;
        this.init(params)
    }
    init(params:number[]){
        let rootNode = this;
        for (let index = 1; index < params.length; index++) {
            this.insertNode(rootNode,params[index])
            
        }
    }
    insertNode(node:Node,key:number){
        let startNode = node;
        if(key<startNode.key){
            if(startNode.left===null){
                startNode.left=new Node(key)
            }else{
                this.insertNode(startNode.left,key)
            }
        }else{
            if(startNode.right===null){
                startNode.right=new Node(key)
            }else{
                this.insertNode(startNode.right,key)
            }
        }
    }
}
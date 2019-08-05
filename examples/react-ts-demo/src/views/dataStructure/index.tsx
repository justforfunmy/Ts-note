import React from 'react';
import BinaryTree from '../../entities/binaryTree/BinaryTree'
import Stack from '../../entities/stack'

export default class PageDataStructure extends React.Component{
    handleBinary=()=>{
        const arr = [6,3,5,2,4,7,11,34];
        const tree = new BinaryTree(arr);
        tree.inOrder()
        console.log(tree)
    }
    handleStack=()=>{
        const stack = new Stack<number>();
        console.log(stack.isEmpty())
        stack.push(1);
        stack.push(8);
        console.log(stack.peek());
        stack.push(5);
        console.log(stack.size());
        stack.pop();
        stack.print()
    }
    handleDivideBy2=(num:number):string=>{
        let remStack = new Stack<number>(),
            rem,
            binaryString='';
        while (num>0) {
            rem = Math.floor(num % 2);
            remStack.push(rem);
            num = Math.floor(num / 2)
        }
        while(!remStack.isEmpty()){
            binaryString+=remStack.pop().toString()
        }
        return binaryString
    }
    render(){
        return (
            <div>
                <button onClick={this.handleBinary}>binary</button>
                <button onClick={this.handleStack}>stack</button>
                <div>{this.handleDivideBy2(125)}</div>
            </div>
        )
    }
    
}
import React from 'react';
import BinaryTree from '../../entities/binaryTree/BinaryTree'
import Stack from '../../entities/stack'
import LinkedList from '../../entities/linkedList'
import Set from '../../entities/set'

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
    handleLinkedList=()=>{
        let linkedList = new LinkedList();
        linkedList.append(123)
        console.log(linkedList)
    }
    handleUnionSet=()=>{
        let set = new Set();
        set.add(2);
        set.add(5);
        let otherSet = new Set();
        otherSet.add(3);
        console.log(set.union(otherSet))
    }
    handleIntersectionSet=()=>{
        let set = new Set();
        set.add(2);
        set.add(5);
        let otherSet = new Set();
        otherSet.add(3);
        otherSet.add("5");
        console.log(set.intersection(otherSet))
    }
    handleSubset=()=>{
        let setA = new Set();
        setA.add(1);
        setA.add(2);
        let setB = new Set();
        setB.add(1);
        setB.add(2);
        setB.add(3);
        let setC = new Set();
        setC.add(2);
        setC.add(3);
        setC.add(4);
        console.log(setA.subset(setB));
        console.log(setA.subset(setC));
    }
    handleDiffence=()=>{
        let setA = new Set();
        setA.add(1);
        setA.add(2);
        setA.add(3);
        let setB = new Set();
        setB.add(2);
        setB.add(3);
        setB.add(4);
        let differenceAB = setA.difference(setB);
        console.log(differenceAB.values());
    }
    render(){
        return (
            <div>
                <h3>二叉树</h3>
                <button onClick={this.handleBinary}>binary</button>
                <h3>栈</h3>
                <button onClick={this.handleStack}>stack</button>
                <div>十进制转二进制：{this.handleDivideBy2(125)}</div>
                <h3>链表</h3>
                <button onClick={this.handleLinkedList}>linkedList</button>
                <h3>集合</h3>
                <button onClick={this.handleUnionSet}>并集</button>
                <button onClick={this.handleIntersectionSet}>交集</button>
                <button onClick={this.handleSubset}>子集</button>
                <button onClick={this.handleDiffence}>差集</button>
            </div>
        )
    }
    
}
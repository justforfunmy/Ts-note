import React from 'react';
import BinaryTree from '../../entities/binaryTree/BinaryTree'

export default class PageBinaryTree extends React.Component{
    render(){
        return (
            <div>binary</div>
        )
    }
    componentDidMount(){
        const arr = [6,3,5,2,4,7,11,34];
        const tree = new BinaryTree(arr);
        console.log(tree)
    }
}
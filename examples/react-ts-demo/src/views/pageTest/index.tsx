import React from 'react';

export default class PageTest extends React.Component {
    testVar=(obj:any)=>{
        // obj={name:1}
        obj.name='123'
        return obj
    }
    testArr=(arr:any[])=>{
        let newArr = [...arr];
        newArr.splice(1,1)
        console.log(newArr)
        return newArr
    }
    testFunction=()=>{
        let fn=function f(params:number) {
            console.log(f)
        }
        console.log(typeof fn)
        fn(1)
    }
    componentDidMount(){
        // let obj= new Object()
        // console.log(this.testVar(obj));
        // console.log(obj)
        // let arr = [1,2,3]; 
        // console.log(this.testArr(arr))
        // console.log(arr)
        // let obj1={name:'123'};
        // let obj2=obj1;
        // obj2.name='1234';
        // obj2=null as any;

        // console.log(obj1,obj2)

        // let colors = [{text:'red'},{text:'green'}]
        // console.log(colors.toLocaleString(),colors.toString(),colors.values())
        // let nums = [1,2];
        // let nums2 = nums.concat();
        // nums2.splice(1,1);
        // console.log(nums,nums2)

        // let date = new Date();
        // console.log(date.toString(),date.toDateString(),date.toTimeString());

        this.testFunction()
    }
    render(){
        return (
            <div>PageTest</div>
        )
    }
}
import React from 'react';

export default class Algorithm extends React.Component {
    reserve = (num: number): number => {
        let me = num < 0 ? num * -1 : num;
        let arr = [];
        while (me / 10 > 0) {
            let remain = me % 10;
            me = Math.floor(me / 10);
            arr.push(remain)
        }
        console.log(Number(arr.join('')))
        let re = num > 0 ? Number(arr.join('')) : -1 * Number(arr.join(''))
        if (re > 214748364 || re < -214748364) return 0;
        return re
    }
    subsets = (nums: number[]): any[] => {
        let ws = [[]];
        for (let i = 0; i < nums.length; ++i) {
            for (let j = 0, len = ws.length; j < len; ++j) {
                ws.push(ws[j].concat([nums[i]]));
            }
        }
        return ws;
    }
    componentDidMount() {
        console.log(this.subsets([1, 2, 3]))
    }
    render() {
        return (
            <div>
                <div>1.给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。</div>
                <button onClick={this.reserve.bind(this, 120)}>solution</button>
                <div>给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。</div>
                <button>solution</button>
            </div>
        )
    }
}
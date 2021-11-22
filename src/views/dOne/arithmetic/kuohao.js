// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
 

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false
// 示例 5：

// 输入：s = "{[]}"
// 输出：true
 

// 提示：

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

// var isValid = function(s) {
//     // var small=['(',')'];
//     // var middle=['[',']'];
//     // var big=['{','}'];
//     var arr= s&&s.split('');
//     var map=new Map();
//     map.set('(',0);
//     map.set(')',0);
//     map.set('[',0);
//     map.set(']',0);
//     map.set('{',0);
//     map.set('}',0);
//     arr.forEach((x)=>{
//         // console.log('sdds');
//         // console.log(map.get(x));
//         if(map.get(x)!==undefined){
//             console.log('----');
//             console.log(x);
//             map.set(x,map.get(x)+1)
//         }
//     })
//     console.log(map.get('(')===map.get(')'));
//     console.log(map.get('[')===map.get(']'));
//     console.log(map.get('{')===map.get('}'));
//     if(map.get('(')===map.get(')')&&map.get('[')===map.get(']')&&map.get('{')===map.get('}')){
//         console.log('true');
//         return true;
//     }else {
//         console.log('false');
//         return false;
//     }
// };

var isValid = function(s) { //以栈为思路
    var small=['(','[','{'];
    var big=[')',']','}'];
    var arr= s&&s.split('');
    var left=new Array();
        for(let i=0;i<arr.length;i++){
            let x=arr[i];
       if(small.indexOf(x)!==-1){
           left.push(x);
       }else if(big.indexOf(x)!==-1){
           if(small.indexOf(left[left.length-1])===big.indexOf(x)){// 根据相同的下标删掉left先进的栈
                left.pop();// 如果有相同的就清除调
           }else{
               return false;
           }
       }  
    }
    if(left.length===0){// 判断是否有单个的情况  正常运行完是不会有剩余的
        return true;
    }else{
        return false;
    }
  
};
let s="{[]}"
isValid(s);
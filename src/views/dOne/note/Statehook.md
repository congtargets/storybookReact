create 可能不是很准确，因为state只在组件首次渲染的时候被创建。在下一次重新渲染时，userState返回给我们当前的state.否则他就不是state了，这也是Hook的名字总是以use开头的一个原因。

读取state
当我们想在class中显示当前的count，我们读取this.state.count：
<p>You clickend {this.state.count} times</p>
在函数中，我们可以用count:
<p>You clicked {count} times</p>

更新State
在class中，我们需要调用this.setState()来更新count值
<button onclick={() => this.setState({count:this.state.count+1})}>点击我</button>

在函数中,我们已经有了setCount和count变量，所以我们不需要this:
<button onclick={()=>setCount(count+1)}>click me</button>

练习

import React, { useState } from 'react';

function Example(){
    const[count, setCount] = useState(0);

    return(
        <div>
        <p> You Clicked {count} times</p>
        <button onclick={()=> setCount(count+1)}>
            点击我
        </button>
        </div>
    );

}
第一行：引入React中的 useState Hook。他让我们在函数组件中储存内部sate。
第四行：在Example组件内部，我们通过调用useState Hook 声明了一个新的state变量。他返回一对值给到我们命名的变量上。我们把变量命名为count,因为他储存的是点击次数，我们通过传0作为useState唯一的参数来将其初始化为0.第二个返回的值本身就是一个函数。他让我们可以更新count的值，所以我们将它setCount。
第九行：当用户点击按钮后，我们传递一个新的值给setCount。React会重新渲染Example组件，并把最新的count传给他

方括号有什么用？
你可能注意到我们用方括号定义了一个state变量
const[count,setCount] =useState(0);
等号左边名字并不是api的部分，你可以自己取名字：
const [fruit,setFruit] = useState("banana');

这种javaScript语法叫数组结构。它意味着我们透视创建了fruit和setFruit两个变量，fruit的值为useState返回的第一个值，setFruit是返回的第二个值。他等价于下面的代码：
var fruitState=useState("banana");// 返回一个有两个元素的数组。
var fruit=fruitState[0];// 数组里的第一个值
var setFruit=fruitState[1];//数组里的第二个值

当我们使用useState定义state变量时候，他返回一个有两个值的数组。第一个值是当前的state，第二个值是更新state的函数。使用[0]和[1]来访问有点令人困惑,因为他们有特定的含义。
localStorage的优势
1：localStorage托转了cookie的4k限制
2：localStorage会可以将第一次请求的数据直接储存到本地，这个相当于5M大小的针对于前端页面的数据库，相对于cookie可以节约宽带，但是这个只有在高版本的浏览器中才支持的
locaStorage的局限
1：浏览器的大小不统一，并且会在IE8以上的Ie版本才支持localStorage这个属性。
2：目前所有的浏览器都会把localStorage的值类型限定为string类型，这个对我们日常比较常见的JSON对象类型需要一些转换。
3：localStorage在浏览器的隐私模式下面是不可读取的。
4：localStorage本质是上是U对支付穿的读取，如果春村内容多的话会消耗内存空间，会导致页面变卡。
5：localStorage不能被爬虫爬取到。
localStorage与sessionStorage唯一区别就是localStroage属于永久性储存，儿sessionStorage属于当回话结束的时候，sessionStorage中的键值对会被清空。
localStorage使用
使用localStorage的时候，我们需要判断浏览器是否支持localStorage这个属性：
if(!window.localStorage){
    alert("浏览器不支持localStorage)；
    return false;
}else{

}

localStorage的写入有三种写法：
if(!widnow.localStorage){
    alert("浏览器不支持localStorage")；
    return false；
}else{
    var storage=window.localStorage;
    //写入a字段
    storage["a"]=1;
    //写入b字段
    storage.b=2;
    //写入c字段
    storage.setItem("c",3);
    console.log(typeof storage["a"]);// string
    console.log(typeof storage["b"]);// string
    console.log(typeof storage["c"]);// string
}
详见图片
localStorage.png

localStorage的使用也是遵循同源策略的，所以不同的网站是不能共用相同的localStorage。
刚刚储存进去的是int类型，但是打印出来的是string类型，这个与localStorage本身的特点有关，localstorage只支持string类型的储存

LoxcalStroage的读取
if(!window.localStorage){
    alert("浏览器不支持localStorage)；
}else{
      var storage=window.localStorage;
    //写入a字段
    storage["a"]=1;
    //写入b字段
    storage.b=2;
    //写入c字段
    storage.setItem("c",3);
    console.log(typeof storage["a"]);// string
    console.log(typeof storage["b"]);// string
    console.log(typeof storage["c"]);// string
    // 第一种方法读取
    var a =storage.a;
    console.log(a); //1
    //第二种方法读取
    var b=storage["b"];
    console.log(b); //2
    // 第三种方法读取
    var c=storage.getItem("c");
    console.log(c); //3
这里面是三种对localStorage的读取，其中官方推荐的是getItem\setItem这两种方法对其进行存取。
我之前就说过localStorage是相当于一个前端数据库的东西，数据库主要是增删改查这四个步骤，这里的读取和写入相当于增，查这两个步骤。
下面我们就来说一说localStorage的删 改这个两个步骤。

改这个步骤比较好理解，思路跟重新更改全局变量的值一样，这里我们就以一个为例来简单的说明一下:
if(!window.localStorage){
    //浏览器不支持localStorage
}else{
    var storage=window.localStorage;
    //写入a字段
    storage["a"]=1;
    //写入b字段
    storage.b=2;
    //写入c字段
    storage.setItem("c",3);
    console.log(storage.a)// 1
    storage.a=4;
    console.log(storage.a);//4
}

删除
1：将localStorage的所有内容清除
var storage=window.localStorage;
storage.a=1;
storage.setItem("c",3);
console.log(storage);//Storage {a:"1",c:"3",length:2}
storage.clear();
console.log(storage.a);// undefined

localStorage键的获取

var storage=window.localStorage;
storage.a=1;
storage.setItem("c",3);
for(let i=0;i<storage.length;i++){
    cosnole.log(storage.key(i));// 使用key方法，向其中出入索引即可获取对应的键
}

localStorage其他注意事项
一般我们会将JSON存入localStroage中，但是在localStorage会自动将localStorage转换成为字符串形式。
这个时候我们可以使用JSON.stringfy()这个方法，来将JSON转换成为JSON字符串。
if(!window.localStorage){
    alert("浏览器不支持localstorage");
}else{
    var storage=window.localStorage;
    var data={
        name:'xiecanyong',
        sex:'man',
        hobby:'program',
    }
}

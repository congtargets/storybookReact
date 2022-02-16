当我们在一个js文件中一require的方式引入另一个文件
例
在index.js中
var lib = require(./lib.js)
如果lib.js中没有任何东西，这个时候
console.log(lib);得到的是一个空对象{}
console.log(1);
setTimeout(() =>{
    console.log('set1');
    Promise.resolve().then(()=>{
        console.log("then2")
    })
})
new Promise((resolve,reject) =>{
console.log("pr1");
}).then(() =>{
    setTimeout(()=>{
        console.log('set2');
    })
    console.log("then1")
})
console.log(3);
// 1,pr1,3,then1,set1,then2,set2
// 微【】-》宏【】


var removeBoxes = function(boxes) {
    let map =new Map();
    for(let i=0;i<boxes.length;i++){
       
        if(map.get(boxes[i])===undefined){
            
            map.set(boxes[i],1);
        }else{
            // console.log(map.get(boxes[i]));
            // console.log('-----------');
            map.set(boxes[i],map.get(boxes[i])+1);
            // console.log(map.get(boxes[i]));
        }
    }
    console.log(map.values());
   let iterator1=map[Symbol.iterator]();
   let values=0;
   for(let item of iterator1){
    values=values+item[1]*item[1];
    console.log(values);
   }
    return values;

}
var boxes = [1,3,2,2,2,3,4,3,1]
removeBoxes(boxes);
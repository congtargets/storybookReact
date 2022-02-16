1:
const age = 12;
let ageGroup;


// LONG FORM
if (age > 18) {
  ageGroup = "An adult";
} else {
  ageGroup = "A child";
}


// SHORTHAND
ageGroup = age > 18 ? "An adult" : "A child";

2:
从数组中删除重复选项

在javaScript中 set是一个稽核，它允许你储存唯一值，这一位置删除任何重复的值。因此要从数组中删除重复项，你可以将其转换为稽核，然后再转换为数组。
const numbers=[1,1,20,3,3,3,9,9];
const uniqueNumbers=[...new Set(numbers)];// [1,20,3,9]

(1)new Set（number）从数字列表中创建一个集合，创建集合会自动删除所有重复值。
（2）、展开运算符...将任何可迭代对象转换为数组，这意味着将集合转换回数组。[...new Set(numbers)]

3:
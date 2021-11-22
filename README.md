学习 study

function isIE() { //ie?
 if (!!window.ActiveXObject || "ActiveXObject" in window)
  return true;
  else
  return false;
 }
 #判断是否是ie  
 
window.opener = null;  
window.open("", "_self");  
window.close();  
 
 
 #关闭当前页面

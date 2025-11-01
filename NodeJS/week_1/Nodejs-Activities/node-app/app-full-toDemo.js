//5 -Your First Node Program
/*
Create a folder name node-app using mkdir node-app
navigate to the folder cd node-app
create a file app.js using touch app.js
open the folder in your code editor code .
write your first node program in app.js
*/
/*
function sayHello(name){
    console.log("Hello, " + name + "!");
}
*/
//sayHello("urName");
//throw an exception to illustrate window is undefined on the ndoes js environment
//console.log(window);


//6 -Node Module System
//console.log(); //window.console in browser
//setTimeout();
//clearTimeout();
//setInterval();
//clearInterval();

//7 -Global Object
// in the browser, prefixed with window
//window.console.log();
//in node we have global
//global.console.log();
//global.setTimeout();
//... but there is no need to prefix with global
// use it directly  / setTimeout();


//8 -Modules
//var message = "Hi";
//console.log(global.message); //undefined
//--in browser we call this way
/*
var sayHello = function(){
    console.log("Hello");
}
window.sayHello()
*/
// but if in another file we define the same function
// it will override the previous one
// in node each file is a module
// each module has its own scope
// to access variables or functions from another module we need to export them
//every file has at least one module which we call main module
//let s log the module object
//console.log(module);
// its not a global object
// it is local to each module

//9 -Creating a Module 
//CLI touch logger.js
//logger.js
//contents 
/** 
 * var url = 'http://mylogger.io/tolog';

function log(message){
    //send an HTTP request
    console.log(message);
}
// variable and function are private to this module
// to make them accessible from outside we need to export them
module.exports = log;
// we can export more than one variable or function
//module.exports = url;
// ES module syntax
//export default log;

 * 
 */
//---wrapper function---
//console.log(arguments.callee.toString());
//console.log(__dirname);
//console.log(__filename);
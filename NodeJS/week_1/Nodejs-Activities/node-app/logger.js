var url = 'http://mylogger.io/tolog';

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

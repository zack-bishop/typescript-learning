"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, _cb) {
    const result = n1 + n2;
    return result;
}
addAndHandle(10, 20, result => {
    console.log(result);
});
function generateError(message, code) {
    throw { message: message, errorCode: code };
}

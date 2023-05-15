
function add2(n1: number, n2: number) {
    return n1 + n2;
}

function printResult2(num: number): void {
    console.log('Result: '+ num);
}

function addAndHandle(n1: number, n2: number, _cb: (num: number) => void) {
    const result = n1 + n2;
    return result;
}

addAndHandle(10,20, result=>{
   console.log(result);
});

function generateError(message: string, code: number) {
    throw { message: message, errorCode: code};
}
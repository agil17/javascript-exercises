const reverseString = function(str) {
    let str2 = "";
    for(let i = str.length - 1; i >= 0; i--) {
        str2 = str2.concat(str[i]);
    }
    return str2;
    
};

reverseString('hello world');

// Do not edit below this line
module.exports = reverseString;

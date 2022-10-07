const repeatString = function(str, num) {
    let str2 = "";
    if(num < 0){
        return "ERROR";
    }
    else {
        for(let i = 0; i < num; i++) {
            str2 = str + str2
        }
    }
    return str2;
};

// Do not edit below this line
module.exports = repeatString;

const sumAll = function(start, end) {
    let sum = 0;
    if(typeof start === 'number' && 
       typeof end === 'number' &&
       start > -1 &&
       end > -1
    ) {
        if(start < end) {
            for(let i = start; i <= end; i++) {
                sum = sum + i;
            }
        }
        else {
            for(let i = end; i <= start; i++) {
                sum = sum + i;
            }
        }
        return sum;
    }
    else {
        return 'ERROR';
    }
};

sumAll(-1,2);

// Do not edit below this line
module.exports = sumAll;

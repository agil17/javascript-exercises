const fibonacci = function(n) {
    n = Number(n);
    let first = 0;
    let second = 1;
    let current;
    if(n < 0) return 'OOPS';
    if(n === 0) return 0;
    if(n === 1) return 1; 
    
    for(let i = 2; i <= n; i++) {
        current = first + second;
        first = second;
        second = current;
    }
    return current;
};


// Do not edit below this line
module.exports = fibonacci;

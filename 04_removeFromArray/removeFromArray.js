const removeFromArray = function(arr, ...args) {
    const arr2 = [];
    for(const x of arr) {
        if(args.includes(x) === false){
            arr2.push(x);
        }
    }
    return arr2;
};

removeFromArray([1,2,3,4],3,'4');

// Do not edit below this line
module.exports = removeFromArray;

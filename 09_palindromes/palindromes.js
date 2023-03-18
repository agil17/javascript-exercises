const palindromes = function (str) {
    // let str = "ZZZZ car, a man, a maracaz.";
    let left = 0;
    let right = str.length - 1;
    str = str.toLowerCase();

    while(left < right) {
        while(!(str.at(left) >= 'a' && str.at(left) <= 'z')) {
            left++;
        }
        while(!(str.at(right) >= 'a' && str.at(right) <= 'z')) {
            right--;
        }
        if(str.at(left) !== str.at(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

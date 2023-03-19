const getAge = (birth, death) => {
    if(!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}

const findTheOldest = function(arr) {
   return arr.reduce((oldest, current) => {
        const oldestAge = getAge(oldest['yearOfBirth'], oldest['yearOfDeath']);
        const currentAge = getAge(current['yearOfBirth'], current['yearOfDeath']);

        return oldestAge > currentAge ? oldest : current;
   })
};

console.log(findTheOldest(
    [
        {
          name: "Carly",
          yearOfBirth: 1066,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]
));

// Do not edit below this line
module.exports = findTheOldest;

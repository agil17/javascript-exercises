const getTheTitles = function(arr) {
    const list = [];

    arr.forEach(book => {
        list.push(book['title']);
    });
    return list;
};

getTheTitles([
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
);

// Do not edit below this line
module.exports = getTheTitles;

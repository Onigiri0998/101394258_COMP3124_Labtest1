const lowerCaseWords = mixedArray => {
    return new Promise((resolve, reject) => {
        const filteredWords = mixedArray.filter(item => typeof item === 'string');
        const lowerCasedWords = filteredWords.map(word => word.toLowerCase());
        
        if (lowerCasedWords.length > 0) {
            resolve(lowerCasedWords);
        } else {
            reject('No valid words found in the input array.');
        }
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'wings'];

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result); // Output: ['pizza', 'wings']
    })
    .catch(error => {
        console.error(error); // Output: 'No valid words found in the input array.'
    });

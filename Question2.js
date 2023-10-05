const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: 'delayed success' });
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception' });
        }, 500);
    });
}

resolvedPromise()
    .then(result => {
        console.log(result); // Output: { message: 'delayed success' }
    })
    .catch(error => {
        console.error(error); // This will not be executed since the promise is resolved
    });

rejectedPromise()
    .then(result => {
        console.log(result); // This will not be executed since the promise is rejected
    })
    .catch(error => {
        console.error(error); // Output: { error: 'delayed exception' }
    });

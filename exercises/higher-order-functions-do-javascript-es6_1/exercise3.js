function countHits(rightAnswers, toVerify) {
    result = 0;
    for (let i in toVerify) {
        if (toVerify[i] === rightAnswers[i]) result += 1;
        if (toVerify[i] !== 'N.A' && toVerify[i] !== rightAnswers[i]) result -= 0.5;
    }
    if (result < 0 ) return 0;
    return result; 

}

function myHof(rightAnswers, toVerify, callback) {
    return callback(rightAnswers, toVerify);

}


const rightAnswers =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(myHof(rightAnswers, studentAnswers, countHits));

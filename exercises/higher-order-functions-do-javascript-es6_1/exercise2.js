function checkHit(gameNumber, yourNumber) {
    if (gameNumber === yourNumber) return true;
}

function generateNumber(number, callback) {
    const gameNumber = Math.floor(Math.random() * 5) + 1;
    const win = callback(gameNumber, number);
    if (!win) {
        return 'Tente novamente';
    } else {
        return 'Parabéns você ganhou';
    }
}

let result = generateNumber(4, checkHit);
console.log(result)

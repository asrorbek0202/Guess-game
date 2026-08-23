const secretNumber = 7;

function checkGuess(userNumber, attempts) {
    if (userNumber === secretNumber) {
        return "🎉 Correct answer!";
    }
    
    if (attempts >= 5) {
        return "❌ 5 ta urinish tugadi!";
    }

    if (userNumber < secretNumber) {
        return "⬆️ Kattaroq son kiriting";
    }

    return "⬇️ Kichikroq son kiriting";
}

module.exports = { checkGuess };
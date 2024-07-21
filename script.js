document.getElementById('startButton').addEventListener('click', () => {
    const userInput = parseInt(document.getElementById('userInput').value, 10)
    const resultDiv = document.getElementById('result')

    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
        resultDiv.textContent = 'Отдуши брат, введи число от 0 до 10, по братски'
        resultDiv.className = 'result'
        return
    }

    const randomNumber = Math.floor(Math.random() * 10) + 1

    if (userInput === randomNumber) {
        resultDiv.textContent = 'Ты красотка!'
        resultDiv.className = 'result win'
    } else {
        resultDiv.textContent = 'Давай по новой Миша, все хуйня! Число было ' + randomNumber
        resultDiv.className = 'result lose'
    }
})
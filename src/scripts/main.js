document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form_drawer').addEventListener('submit', function (event) {
        event.preventDefault();
        let maxNumber = document.getElementById('max_number').value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.floor(randomNumber + 1);

        document.getElementById('result_value').innerText = randomNumber;
        document.querySelector('.result').style.display = 'block';
    })
})
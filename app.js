fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(json => {
        jsonAdvice = json

        var id = document.getElementById("number-advice")
        id.innerText = jsonAdvice.slip.id

        var txt = document.getElementById("advice-text")
        txt.innerText = jsonAdvice.slip.advice
    })
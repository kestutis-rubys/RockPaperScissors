const buttons = document.querySelector('.buttons')
const button = document.querySelectorAll('button')
const answer = document.querySelector('.answer')
const result = document.querySelector('.result')
const pointsNumber = document.querySelector('span')
let points = 0
const classes = ["first", "second", "third"]

buttons.addEventListener('click', (e) => {
    let buttonValue = Number(e.target.id);
    const randomNumber = Math.floor(Math.random() * 3)
    answer.className = "answer"
    result.className = "result"

    if(buttonValue === 0 && randomNumber === 2 || (buttonValue === 1 && randomNumber === 0) || (buttonValue === 2 && randomNumber === 1)){
        points++;
        result.innerHTML = "Congrats, You Won!";
        result.classList.toggle('success')
        answer.classList.toggle(String(classes[randomNumber]))
    } else if (buttonValue === randomNumber){
        result.innerHTML = "It's draw! Try again!";
        result.classList.toggle('draw')
        answer.classList.toggle(String(classes[randomNumber]))
    }
     else {
        points--;
        result.innerHTML = "Ooops. Try again!";
        result.classList.toggle('failure')
        answer.classList.toggle(String(classes[randomNumber]))
    }

    switch (buttonValue){
        case 0:
            button[0].classList.add('clicked')
            button[1].classList.remove('clicked')
            button[2].classList.remove('clicked')
            break;
        case 1:
            button[1].classList.add('clicked')
            button[0].classList.remove('clicked')
            button[2].classList.remove('clicked')
            break;
        case 2:
            button[2].classList.add('clicked')
            button[1].classList.remove('clicked')
            button[0].classList.remove('clicked')
            break;
    }
    pointsNumber.textContent = points

})


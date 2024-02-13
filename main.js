let card2 = document.getElementsByClassName('card2') [0]
let card1 = document.getElementsByClassName('card1') [0]
let submitButton = document.getElementById('sub')
let rating = document.getElementById('rating')
let btn = document.querySelectorAll('.btn')

submitButton.addEventListener('click', () =>{
    card2.classList.remove('hidden')
    card1.style.display = 'none'
});

btn.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})
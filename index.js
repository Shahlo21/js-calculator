const plus = document.querySelector('#plus')
let numbers = document.querySelectorAll('.numbers button')
let display = document.querySelector('.display')
const equal = document.querySelector('#equal')
const multiply = document.querySelector('#multiply')
const minus = document.querySelector('#minus')
const divide = document.querySelector('#divide')






plus.addEventListener('click', function () {
    display.innerHTML += this.innerHTML
})
minus.addEventListener('click', function () {
    display.innerHTML += this.innerHTML
})
equal.addEventListener('click', function () {
    const order = display.innerHTML.search('%')
    if (order > 0) {
        let first = display.innerHTML.slice(0,order)
        let second = display.innerHTML.slice(order + 1)
        display.innerHTML = +first * +second / 100
        console.log(first,second)
    } else {
        display.innerHTML = eval(display.innerHTML)
    }

})
multiply.addEventListener('click', () => {
    display.innerHTML += '*'
})
percentage.addEventListener('click', () => {
    display.innerHTML += '%'
})
divide.addEventListener('click', (e) => {
    display.innerHTML += '/';
})
reset.addEventListener('click', () => {
    display.innerHTML = '';
})



for (let number of numbers) {
    number.addEventListener('click', function () {
        display.innerHTML += this.innerHTML

    })
}
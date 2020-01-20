const plus = document.querySelector('#plus')
let numbers = document.querySelectorAll('.numbers button')
let display = document.querySelector('.display')
const equal = document.querySelector('#equal')
const multiply = document.querySelector('#multiply')
const minus = document.querySelector('#minus')
const divide = document.querySelector('#divide')






plus.addEventListener('click', function() {
    display.innerHTML += this.innerHTML
})
minus.addEventListener('click', function() {
    display.innerHTML += this.innerHTML
})
equal.addEventListener('click', function(){
    display.innerHTML = eval(display.innerHTML)
}) 
multiply.addEventListener('click', ()=> {
    display.innerHTML += '*'
})
divide.addEventListener('click', (e)=> {
    display.innerHTML += '/';
})
reset.addEventListener('click', ()=> {
    display.innerHTML = '';
})



for(let number of numbers) {
    number.addEventListener('click', function()
    { 
    display.innerHTML += this.innerHTML
    
    })
}

const plus = document.querySelector('#plus')
let numbers = document.querySelectorAll('.numbers button')
let display = document.querySelector('.display')
const equal = document.querySelector('#equal')
const multiply = document.querySelector('#multiply')




plus.addEventListener('click', function() {
    display.innerHTML += this.innerHTML
})
equal.addEventListener('click', function(){
    display.innerHTML = eval(display.innerHTML)
}) 
multiply.addEventListener('click', ()=> {
    
})




for(let number of numbers) {
    number.addEventListener('click', function()
    { 
    display.innerHTML += this.innerHTML
    
    })
}

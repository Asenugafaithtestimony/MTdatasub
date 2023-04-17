

const open = document.getElementById('open')
const close = document.getElementById('close')
const content = document.getElementById('content')
const mtn1 = document.querySelector('.mtn1')
const option = document.getElementById('option')
const option2 = document.getElementById('option2')
const glo1 = document.querySelector('.glo1')
const airtel1 = document.querySelector('.airtel1')
const etisalat1 = document.querySelector('.etisalat1')

open.addEventListener('click', () => content.classList.add('active'))
close.addEventListener('click', () => content.classList.remove('active'))

mtn1.addEventListener('click', ()=> option.classList.remove('show'))
mtn1.addEventListener('click', () => option2.classList.remove('show'))

glo1.addEventListener('click', () => option2.classList.remove('show'))
airtel1.addEventListener('click', () => option2.classList.remove('show'))

etisalat1.addEventListener('click', () => option2.classList.remove('show'))

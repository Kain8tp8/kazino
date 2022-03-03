const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const btn1 = document.querySelector('#btn1')

function namber (a) {
  input.value = Namber(input.value)+a
}

btn.addEventListener('click',()=>{
  tasbih(-1)
})

btn1.addEventListener('click',()=>{
  tasbih(1)
})




let div = document.querySelector('div')
let input = document.querySelector('input')

//btnDiv //
let btnDiv = document.createElement('div')
let delet = document.createElement('button')
delet.innerText = 'Delet'
delet.classList.add('deletbtn')
let add = document.createElement('button')
add.innerText = 'add'
add.classList.add('addbtn')

btnDiv.append(delet, add)
div.append(input, btnDiv)
let li
let remove

function list() {
  li = document.createElement('li')
  li.innerText = input.value
  input.value = ''
  let checkInput = document.createElement('input')
  checkInput.setAttribute('type', 'checkbox')
  remove = document.createElement('button')
  remove.classList.add('removeBtn')
  remove.innerText = '❌'
  li.append(checkInput, remove)
  div.append(li)
  console.log(li)
  remove.addEventListener('click', removeLi)
}
// delet-input //
function deletInput() {
  input.value = ''
}

//remove-li //
function removeLi(e) {
  let AllLi = document.querySelectorAll('li')
  console.log(e.target.parentElement.remove())
}

// click-event //
delet.addEventListener('click', deletInput)
add.addEventListener('click', list)

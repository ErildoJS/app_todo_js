let ulElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")

let todos = [
  'Estudar reactjs',
  'Estudar node'
]

function render() {
  ulElement.innerHTML = ''
  for(todo of todos) {
   let liElement = document.createElement('li')
   let liText = document.createTextNode(todo)

   liElement.appendChild(liText)
   ulElement.appendChild(liElement)
  }
}

render()

function add() {
  let valorInp = inputElement.value

  todos.push(valorInp)

  inputElement.value = ''

  render()
}

buttonElement.onclick = add
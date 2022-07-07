const shouldCreate = false
// let todoList = []
const todoListUl = document.querySelector('#todo-list')
//console.log("tolist", todoListUl)

const state = {
    todoList: []
}

function renderTodos() {
    //const todoListUl = document.querySelector('#todo-list')

    state.todoList.forEach(todo => {
        const li = document.createElement("li")
        // add to ul
        
        li.classList = "todo-item"
        li.textContent = todo.title
        li.style.marginBottom = '15px'
        if (todo.completed) {
            li.style.color = 'grey'
            li.style.textDecoration = 'line-through'
        }
        console.log("print li", li)
        console.log("print ul", todoListUl)
        todoListUl.append(li)
        
    })
    console.log('render')
    console.log('state after render', state.todoList)
}

const get = () => {
fetch('http://localhost:3000/todos')
.then(function (response) {
  return response.json()
})
.then(function (todos) {
    state.todoList = todos
    console.log("todos", todos)
    renderTodos()
  
})}

const create = () => {

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "Put the bins out",
            completed: false
        })
    })
}

get()
//create()
renderTodos()

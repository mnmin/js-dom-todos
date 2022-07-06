const shouldCreate = false
let todoList = []

function renderTodos() {
    const todolistul = documet.querySelector('.todo-list')

    todoList.forEach(todo => {
        const li = document.createElement("li")
        // add to ul
        li.classList = "todo-item"
        li.textContent = item.title
        li.style.marginBottom = '15px'
        if (item.completed) {
            li.style.color = 'grey'
            li.style.textDecoration = 'line-through'
        }
        todoList.append(li)
        
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
    todoList = todos
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
create()
renderTodos()

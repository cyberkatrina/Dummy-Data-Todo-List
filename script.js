// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    let list = document.getElementById("todo-list")
    let newText
    for (i=0; i < arrayOfTodos.length; i++) {
        let li = document.createElement('li')
        newText = document.createTextNode(arrayOfTodos[i].title)
        li.appendChild(newText)
        list.appendChild(li)
    }
}

const handleFilter = () => {
    let list = document.getElementById("todo-list")
    let inputID = document.getElementById("inputID").value
    // get the filtered to dos based on user input
    const filtered = arrayOfTodos.filter((todo) => {
        return todo.userId == inputID
    })
    // clear previous list
    list.innerHTML = ""
    // put new filtered list on page
    arrayOfTodos = filtered
    populateTodos()
}

const completed = () => {
    let list = document.getElementById("todo-list")
    const complete = arrayOfTodos.filter((todo) => {
        return todo.completed == true
    })
    list.innerHTML = ""
    arrayOfTodos = complete
    populateTodos()
}

const notCompleted = () => {
    let list = document.getElementById("todo-list")
    const incomplete = arrayOfTodos.filter((todo) => {
        return todo.completed == false
    })
    list.innerHTML = ""
    arrayOfTodos = incomplete
    populateTodos()
}
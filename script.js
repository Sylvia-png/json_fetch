let arrayOfTodos = [
{
    "userId": 14,
    "id" : 1,
    "title": "delectus aut autem",
    "completed": false
    },
{
    "userId": 20,
    "Id": 2,
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
//original
const populateTodos =() => {
    var todoList = document.getElementById("todo-list");
    for (i=0; i < arrayOfTodos.length; i++) {
        var todoListItem = document.createElement("Li")
        var itemText = document.createTextNode(arrayOfTodos[i].title);
        todoListItem.appendChild(itemText);
        todoList.appendChild(todoListItem);
        if (!arrayOfTodos[i].completed){
            todoListItem.style.setProperty('color', 'red');
        }else{
            todoListItem.style.setProperty('color', 'green');
        }
        todoList.appendChild(todoListItem);
        
    }
}
const arrayOfTodos1 = [
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
    }
]

console.log(arrayOfTodos1[0].userId)//=> 14
console.log(arrayOfTodos1[1].userId)//=> 20

//
const list = document.getElementById('todo-list')
let redTodos = []
let redCompleteTodos = []

var idInput = 0
var lastIndex = 0
var indexLimit = 20
var isPopulated = false
var isFiltered = false
var isCompleted = null
var correctInput = false
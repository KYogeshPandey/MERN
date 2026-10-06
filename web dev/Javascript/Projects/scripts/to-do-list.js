const todoList = [
  {
    name: 'Java',
    dueDate: '2023-07-01'
  },
  {
    name: 'Python',
    dueDate: '2023-09-01' 
  }
];

displaytodoList();

function displaytodoList(){

  let todoListHTMl = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const{name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick="
    todoList.splice(${i},1);
    displaytodoList();
    " class="todo-delete-button">Delete</button>
    `;
    todoListHTMl += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTMl;

}
function pressEnter(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}


function addTodo () {
  const inputElement = document.querySelector('.js-input');

  const inputdate = document.querySelector('.js-input-date');

  const name = inputElement.value;
  const dueDate = inputdate.value;

  // push the value in array
  todoList.push(
    {
    //name: name,
    //dueDate: dueDate}
    name,
    dueDate
    }
  );


  inputElement.value = '';

  displaytodoList();
  
}
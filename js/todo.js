const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

const paintToDo = (text) => {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  delBtn.innerText = '❌';
  const span = document.createElement('span');
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

const handleSumbit = (e) => {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

const loadToDos = () => {
  const toDos = localStorage.getItem(TODOS_LS);
  if (!toDos) {

  }
}

loadToDos();
toDoForm.addEventListener('submit', handleSumbit)

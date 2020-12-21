const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

const toDos = [];

const saveToDos = () => {
  //LocalStorage에는 string만 저장
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

const paintToDo = (text) => {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  delBtn.innerText = '❌';
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId
  toDoList.appendChild(li);
  const toDoObj = {
    text,
    newId,
  };
  toDos.push(toDoObj);
  saveToDos();
};

const handleSumbit = (e) => {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
};

const loadToDos = () => {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos) {
    console.log(loadedTodos)
    //string으로 바꿧던 내용을 -> Object로 변환
    const parsedTodos = JSON.parse(loadedTodos)
    parsedTodos.forEach((toDo) => paintToDo(toDo.text));
  }
};

loadToDos();
toDoForm.addEventListener('submit', handleSumbit)

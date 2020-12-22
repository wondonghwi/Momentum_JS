const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

//삭제
const deleteToDo = (e) => {
  const li = e.target.parentNode;
  //Todo html 태그 삭제
  toDoList.removeChild(li);
  //Todo 데이터 삭제 두가지 한번에 진행
  toDos = toDos.filter(toDo => {
    return toDo.id !== parseInt(li.id);
  });
  saveToDos();
}

//localStorage 저장
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
  delBtn.addEventListener('click' , deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId
  toDoList.appendChild(li);
  const toDoObj = {
    text,
    id: newId,
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
    //string으로 바꿧던 내용을 -> Object로 변환
    const parsedTodos = JSON.parse(loadedTodos)
    parsedTodos.map((toDo) => paintToDo(toDo.text));
  }
};

loadToDos();
toDoForm.addEventListener('submit', handleSumbit)

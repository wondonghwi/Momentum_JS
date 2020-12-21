const form = document.querySelector('.js-form'),
  input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

//정보 상수 지정
const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

const SaveName = (text) => {
  localStorage.setItem(USER_LS , text);
};

//submit 동작
const handleSubmit = (e) => {
  e.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  SaveName(currentValue);
}

//currentUser가 없을때
const askForName = () => {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit' , handleSubmit);
};

//currentUser가 있을때
const paintGreeting = (text) => {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`
}

const loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if (!currentUser) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

loadName();

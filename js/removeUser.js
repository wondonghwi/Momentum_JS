const LS = 'currentUser';

const removeUser = document.querySelector(".js-removeUser");

const handleRemove = () => {
  localStorage.removeItem(LS);
  window.location.reload();
}

removeUser.addEventListener('click', handleRemove);

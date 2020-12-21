const removeUser = document.querySelector(".js-removeUser");

const handleRemove = () => {
  localStorage.clear();
  window.location.reload();
}

removeUser.addEventListener('click', handleRemove);

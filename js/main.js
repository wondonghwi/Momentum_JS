const title = document.getElementById('title');

const CLIICKED_CLASS = 'clicked';

const handleClick = () => {
  title.classList.toggle(CLIICKED_CLASS);
}

window.addEventListener('click', handleClick);

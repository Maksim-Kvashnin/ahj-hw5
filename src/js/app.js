import Popover from './Popover';

const popoverFactory = new Popover();
let actualPopovers = [];
const popoverText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, nobis?';

const container = document.querySelector('.container');

const showPopover = (eaderText, bodyText, el) => {
  actualPopovers.push({
    name: el.name,
    id: popoverFactory.show(eaderText, bodyText, el),
  });
};

const onClick = (e) => {
  actualPopovers.forEach((popover) => popoverFactory.remove(popover.id));
  actualPopovers = [];

  const { target } = e;
  if (target.classList.contains('btn')) {
    showPopover('Title', popoverText, target);
  }
};

window.addEventListener('click', onClick);

const button = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Click to toggle popover';
button.classList.add('btn', 'btn-lg', 'btn-danger');

const tasks = container.querySelectorAll('.task');
const task1 = tasks[0];
task1.appendChild(button);

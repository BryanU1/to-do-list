export function createSideNav() {
  const element = document.createElement('div');
  const ul = document.createElement('ul');
  const today = document.createElement('li');
  const week = document.createElement('li');
  const month = document.createElement('li');

  element.classList.add('side-bar-nav');
  today.textContent = 'Today';
  today.setAttribute('id', 'today');
  week.textContent = 'Week';
  week.setAttribute('id', 'week');
  month.textContent = 'Month';
  month.setAttribute('id', 'month');

  ul.append(today);
  ul.append(week);
  ul.append(month);
  element.append(ul);

  return element;
}

export function createContent() {
  const content = document.createElement('div');
  const itemContainer = document.createElement('div');
  const userInput = document.createElement('div');
  const text = document.createElement('input');
  const btn = document.createElement('button');
  const ul = document.createElement('ul');
  
  content.className = 'content';
  itemContainer.className = 'item-container';
  userInput.className = 'userInput'
  text.id = 'item-name';
  text.name = 'item-name';
  text.placeholder = 'Enter text here'
  btn.innerHTML = '+';
  btn.id = 'add-item-btn';
  ul.className = 'item-ul';

  //add item by clicking button
  btn.addEventListener('click', addItem);

  //remove item by clicking button

  userInput.append(text);
  userInput.append(btn);
  content.append(userInput);
  itemContainer.append(ul);
  content.append(itemContainer);

  return content;
}

function addItem() {
  const container = document.createElement('div');
  const li = document.createElement('li');
  const check = document.createElement('button');
  const remove = document.createElement('button');
  const text = document.getElementById('item-name');
  const ul = document.querySelector('.item-ul');

  if (text.value === '') {
    return;
  }

  container.className = 'li-container';
  li.textContent = text.value;
  check.innerHTML = '&#10003';
  check.id = 'check-btn';
  remove.innerHTML = '&#10005';
  remove.id = 'remove-btn';

  check.addEventListener('click', (e) => {
    const item = e.target.parentNode;
    item.firstChild.classList.toggle('checked');
  });

  remove.addEventListener('click', (e) => {
    removeItem(e);
  });

  container.append(li);
  container.append(check);
  container.append(remove);
  ul.append(container);

  text.value = '';
}

function removeItem(e) {
  const item = e.target.parentNode;
  item.remove();
}
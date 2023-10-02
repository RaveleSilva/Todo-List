const titulo = document.querySelector('.create input');
const createButton = document.querySelector('.create .button');
const lista = document.querySelector('.list');

function createItem() {
  if (titulo.value.length > 0) {
    const item = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
  
    input.setAttribute('name', 'item');
    input.setAttribute('type', 'checkbox');
  
    label.setAttribute('for', 'item');
    label.innerHTML = titulo.value;
  
    item.appendChild(input);
    item.appendChild(label);
  
    lista.appendChild(item);
  }
  
}

createButton.addEventListener('click', createItem);
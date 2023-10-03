const titulo = document.querySelector('.create input');
const createButton = document.querySelector('.create .button');
const lista = document.querySelector('.list');

function deleteItem(item) {
  item.remove();
}

function createItem() {
  if (titulo.value.length > 0) {
    const item = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const del = document.createElement('span');
    const checkboxId = Date.now();
  
    input.setAttribute('name', 'item');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', checkboxId)

    label.setAttribute('for', input.id);
    label.innerHTML = titulo.value;
    titulo.value = ''

    del.addEventListener('click', () => deleteItem(item));

    item.appendChild(input);
    item.appendChild(label);
    item.appendChild(del);

    lista.appendChild(item);

  }
}

createButton.addEventListener('click', createItem);
window.addEventListener('keydown', function(event) {
  const key = event.key;

  if (key === 'Enter') {
    createItem();
  }
})

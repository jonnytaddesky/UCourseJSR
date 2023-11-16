var label = document.createElement('label');
var input = document.createElement('input');

// Встановлення атрибутів
label.setAttribute('for', 'example');
input.setAttribute('type', 'text');
input.setAttribute('id', 'example');

// Додавання тексту до label
label.innerHTML = 'Example Input:';

// Вибір елемента для додавання
var form = document.getElementById('myForm');

// Додавання елементів до DOM
form.appendChild(label);
form.appendChild(input);

const dragabble_list = document.querySelector('#draggable-list');
const check = document.querySelector('#check');

const classification = [
    'Joel Valldosera',
    'Agustin Cáceres',
    'Oriol Sivill',
    'Jorge Mato',
    'Gerard Gil',
    'Jordi Sanchez',
    'David Linares',
    'Jordi Moreno',
    'Sergio Marin',
    'Xavi Casanovas'
];

// Store list Items
const listItems = [];

let dragStartIndex;

createList();



// Funciones

// Insert list items into DOM
function createList(){
    [...classification]
    .forEach((person, index) => {
        const listItem = document.createElement('LI');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="persona-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `
    });
}
const draggable_list = document.querySelector('#draggable-list');
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
    .map(a => ({ value: a, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(a=> a.value)
    .forEach((person, index) => {


        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `
        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    });

    
}
import utilities from '../helpers/utilities.js';

const cheeses = 
[
    {
        id: "cheese1", 
        name: "Cheedar", 
        price: 50 
    },
    {
        id: "cheese2", 
        name: "Provolone", 
        price: 70 
    },
    {
        id: "cheese3", 
        name: "Mozzarella", 
        price: 30 
    },
    {
        id: "cheese4", 
        name: "Swiss", 
        price: 10 
    },

];

const printCheeseOptions = () => {
    let domString = '';
    for(let i=0; i < cheeses.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${cheeses[i].id}>
        <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('cheese', domString);
};

export default { printCheeseOptions };
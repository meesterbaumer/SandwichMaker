import utilities from '../helpers/utilities.js';

const cheeses = 
[
    {
        id: "cheese1", 
        name: "Cheddar", 
        price: 70
    },
    {
        id: "cheese2", 
        name: "Provolone", 
        price: 60 
    },
    {
        id: "cheese3", 
        name: "Mozzarella", 
        price: 50 
    },
    {
        id: "cheese4", 
        name: "Swiss", 
        price: 40 
    },

];

const printCheeseOptions = () => {
    let domString = '';
    for(let i=0; i < cheeses.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}>
        <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('cheese', domString);
};

const getSelectedCheese = () => {
    const selectedCheese = [];
    const cheeseOptions = document.getElementsByClassName('cheese');
    for (let j=0; j<cheeseOptions.length; j++) {
        for (let k=0; k<cheeses.length; k++) {
            if (cheeseOptions[j].checked === true && cheeseOptions[j].id === cheeses[k].id) {
                selectedCheese.push(cheeses[k]);
            }
        }
    }
    return selectedCheese;
};

export default { getSelectedCheese, printCheeseOptions };
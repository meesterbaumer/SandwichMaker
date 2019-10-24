import utilities from '../helpers/utilities.js';

const veggies = 
[
    {
        id: "veggies1", 
        name: "Lettuce", 
        price: 25 
    },
    {
        id: "veggies2", 
        name: "Pickles", 
        price: 40 
    },
    {
        id: "veggies3", 
        name: "Banana Peppers", 
        price: 66 
    },
    {
        id: "veggies4", 
        name: "Jalapeno Peppers", 
        price: 35 
    },
    {
        id: "veggies5", 
        name: "Anchovies", 
        price: 100 
    },
    {
        id: "veggies6", 
        name: "Onions", 
        price: 75 
    },
   
];

const printVeggieOptions = () => {
    let domString = '';
    for(let i=0; i < veggies.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input veggies" id="${veggies[i].id}>
        <label class="form-check-label" for=${veggies[i].id}>${veggies[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('veggies', domString);
};

const getSelectedVeggies = () => {
    const selectedVeggie = [];
    const veggieOptions = document.getElementsByClassName('veggies');
    for (let j=0; j<veggieOptions.length; j++) {
        for (let k=0; k<veggies.length; k++) {
            if (veggieOptions[j].checked === true && veggieOptions[j].id === veggies[k].id) {
                selectedVeggie.push(veggies[k]);
            }
        }
    }
    return selectedVeggie;
};

export default { getSelectedVeggies, printVeggieOptions };
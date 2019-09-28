import utilities from '../helpers/utilities.js';

const veggies = 
[
    {
        id: "veggies1", 
        name: "Mayo", 
        price: 50 
    },
    {
        id: "veggies2", 
        name: "Mustard", 
        price: 70 
    },
    {
        id: "veggies3", 
        name: "Ranch", 
        price: 30 
    },
    {
        id: "veggies4", 
        name: "Honey", 
        price: 10 
    },
    {
        id: "veggies5", 
        name: "Mustard", 
        price: 10 
    },
    {
        id: "veggies6", 
        name: "Chipotle Ranch", 
        price: 10 
    },
   
];

const printVeggieOptions = () => {
    let domString = '';
    for(let i=0; i < veggies.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${veggies[i].id}>
        <label class="form-check-label" for=${veggies[i].id}>${veggies[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('veggies', domString);
};

export default { printVeggieOptions };
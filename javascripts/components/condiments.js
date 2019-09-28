import utilities from '../helpers/utilities.js';

const condiments = 
[
    {
        id: "condiments1", 
        name: "Mayo", 
        price: 50 
    },
    {
        id: "condiments2", 
        name: "Mustard", 
        price: 70 
    },
    {
        id: "condiments3", 
        name: "Ranch", 
        price: 30 
    },
    {
        id: "condiments4", 
        name: "Honey", 
        price: 10 
    },
    {
        id: "condiments5", 
        name: "Mustard", 
        price: 10 
    },
    {
        id: "condiments6", 
        name: "Chipotle Ranch", 
        price: 10 
    },
   
];

const printCondimentOptions = () => {
    let domString = '';
    for(let i=0; i < condiments.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${condiments[i].id}>
        <label class="form-check-label" for=${condiments[i].id}>${condiments[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('condiments', domString);
};

export default { printCondimentOptions };
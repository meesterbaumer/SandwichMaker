import utilities from '../helpers/utilities.js';

const condiments = 
[
    {
        id: "condiments1", 
        name: "Mayo", 
        price: 25 
    },
    {
        id: "condiments2", 
        name: "Mustard", 
        price: 65 
    },
    {
        id: "condiments3", 
        name: "Ranch", 
        price: 15 
    },
    {
        id: "condiments4", 
        name: "Honey", 
        price: 10 
    },
    {
        id: "condiments5", 
        name: "Honey Mustard", 
        price: 35 
    },
    {
        id: "condiments6", 
        name: "Chipotle Ranch", 
        price: 75 
    },
   
];

const printCondimentOptions = () => {
    let domString = '';
    for(let i=0; i < condiments.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input condiments" id="${condiments[i].id}">
        <label class="form-check-label" for=${condiments[i].id}>${condiments[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('condiments', domString);
};

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    const condimentOptions = document.getElementsByClassName('condiments');
    for (let j=0; j<condimentOptions.length; j++) {
        for (let k=0; k<condiments.length; k++) {
            if (condimentOptions[j].checked === true && condimentOptions[j].id === condiments[k].id) {
                selectedCondiments.push(condiments[k]);
            }
        }
    }
    return selectedCondiments;
};

export default { getSelectedCondiments, printCondimentOptions };
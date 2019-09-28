import utilities from '../helpers/utilities.js';

const breads = 
[
    {
        id: "bread1", 
        name: "White", 
        price: 50 
    },
    {
        id: "bread2", 
        name: "Wheat", 
        price: 70 
    },
    {
        id: "bread3", 
        name: "Sourdough", 
        price: 30 
    },

];

const printBreadOptions = () => {
    let domString = '';
    for(let i=0; i < breads.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${breads[i].id}>
        <label class="form-check-label" for=${breads[i].id}>${breads[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('bread', domString);
};

export default { printBreadOptions };
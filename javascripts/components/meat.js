import utilities from '../helpers/utilities.js';

const meats = 
[
    {
        id: "meat1", 
        name: "Turkey", 
        price: 500 
    },
    {
        id: "meat2", 
        name: "Ham", 
        price: 700 
    },
    {
        id: "meat3", 
        name: "Chicken", 
        price: 300 
    },
    {
        id: "meat4", 
        name: "Steak", 
        price: 900 
    },

];

const printMeatOptions = () => {
    let domString = '';
    for(let i=0; i < meats.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${meats[i].id}>
        <label class="form-check-label" for=${meats[i].id}>${meats[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('meats', domString);
};

export default { printMeatOptions };
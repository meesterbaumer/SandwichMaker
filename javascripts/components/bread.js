import utilities from '../helpers/utilities.js';

const breads = 
[
    {
        id: "bread1", 
        name: "White", 
        price: 100 
    },
    {
        id: "bread2", 
        name: "Wheat", 
        price: 125
    },
    {
        id: "bread3", 
        name: "Sourdough", 
        price: 175
    },

];

const getSelectedBread = () => {
    const selectedBread = [];
    const breadOptions = document.getElementsByClassName('bread');
    for (let j=0; j<breadOptions.length; j++) {
        for (let k=0; k<breads.length; k++) {
            if (breadOptions[j].checked === true && breadOptions[j].id === breads[k].id) {
                selectedBread.push(breads[k]);
            }
        }
    }
    return selectedBread;
};

const printBreadOptions = () => {
    let domString = '';
    for(let i=0; i < breads.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input bread" id="${breads[i].id}">
        <label class="form-check-label" for=${breads[i].id}>${breads[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('breads', domString);
};


export default { getSelectedBread, printBreadOptions };
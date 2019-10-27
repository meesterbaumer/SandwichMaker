import utilities from '../helpers/utilities.js';

const meats = 
[
    {
        id: "meat1", 
        name: "Turkey", 
        price: 375 
    },
    {
        id: "meat2", 
        name: "Ham", 
        price: 300 
    },
    {
        id: "meat3", 
        name: "Chicken", 
        price: 450 
    },
    {
        id: "meat4", 
        name: "Steak", 
        price: 750 
    },

];

const printMeatOptions = () => {
    let domString = '';
    for(let i=0; i < meats.length; i++) {
        domString +=
        `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input meats" id="${meats[i].id}">
        <label class="form-check-label" for=${meats[i].id}>${meats[i].name}</label>
        </div>
        `;
    }
    
    utilities.printToDom('meats', domString);
};

const getSelectedMeats = () => {
    const selectedMeats = [];
    const meatOptions = document.getElementsByClassName('meats');
    for (let j=0; j<meatOptions.length; j++) {
        for (let k=0; k<meats.length; k++) {
            if (meatOptions[j].checked === true && meatOptions[j].id === meats[k].id) {
                selectedMeats.push(meats[k]);
            }
        }
    }
    return selectedMeats;
};

export default { getSelectedMeats, printMeatOptions };
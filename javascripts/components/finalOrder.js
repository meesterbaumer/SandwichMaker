import bread from '../components/bread';
import meat from '../components/meat';
import cheese from '../components/cheese';
import condiments from '../components/condiments';
import veggies from '../components/veggies';
import utilities from '../helpers/utilities'

const reducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
}

const FinalOrder = (items) => {
  let domString = '';
  let prices = [];
  for (let i=0; i<items.length; i++) {
    prices.push(items[i].price);
    domString += `
    <div class="toppings">
    <div class="row">
    <div class="col d-flex justify-content-start">
    <p>${items[i].name}</p>
    </div>
    <div class="col d-flex justify-content-end">
    <p>$${((items[i].price)/100).toFixed(2)}</p>
    </div>
    </div>
    </div>
    `
  }
  let finalPrice = prices.reduce(reducer);
  let formatPrice = (finalPrice/100).toFixed(2);
  utilities.printToDom('totalPrice', `<h3>Total Price: $${formatPrice}</h3>`);
  utilities.printToDom('final-order', domString);
};

const createOrder = () => {
  let selectedToppings = '';

  const breadChoice = bread.getSelectedBread();
  const meatChoice = meat.getSelectedMeat();
  const cheeseChoice = cheese.getSelectedCheese();
  const condimentChoice = condiments.getSelectedCondiment();
  const veggieChoice = veggies.getSelectedVeggie();

  selectedToppings = breadChoice.concat(meatChoice, cheeseChoice, condimentChoice, veggieChoice);

  FinalOrder(selectedToppings);

};

const printOrderButton = () => {
  const domString2 = '<button id="orderButton" class="btn btn-primary">Place Order</button>';
  utilities.printToDom('final-order', domString2);
  document.getElementById('orderButton').addEventListener('click', createOrder);
};

export default { printOrderButton };
//Get elements
const orderButton = document.querySelector('button');
const cakeList = document.querySelector('#cakes ul')

//Function to display cakes
fuction displayCakes() {
  cakeList.innerHTML = '';
  cakes.forEach((cake) => {
    const cakeItem = document.createElement('li');
    cakeItem.textContent = '${cake.name} - $${cake.price}';
    cakeList.appendChild(cakeItem);
  });
}

//Display cakes on page load
displayCakes();

//Add event listener to order button
orderButton.addEventListener('click', () => {
  const orderForm = document.createElement('form');
  orderForm.innerHTML ='
    <label for="cake">Select Cke:</label>
    <select id="cake" name="cake">
     ${cakes.map((cake) => 'option value="${cake.name}">${cake.name}</option>').join('')}
    </select>
    <br>
    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" value="1">
    <br>
    <button type="submit">Place Order</button>';

//Replace button with order form
orderButton.replaceWith(orderForm);

//Add event listener to order form
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedCake = document.querySelector('#cake').value;
  const quantity = document.querySelector('quantity').value;
  const cake = cakes.fint((cake) => cake.name === selectedCake);
  const totalPrice = cake.price * quantity;

  //Display order confimation
  arlet('Order placed for ${quantity} ${selectedCake}(s) - Total:$${totalPrice.toFixed(2)}');
}
}
document.querySelector('button').addEventListener('click', () =>{
  alert('Order now functionality coming soon!');
});

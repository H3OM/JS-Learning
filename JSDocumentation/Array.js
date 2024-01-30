//! var list = document.querySelector('.output ul');
//! var totalBox = document.querySelector('.output p');
var total = 0;
//! list.innerHTML = '';
//! totalBox.textContent = '';

// number 1
      let products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];     

for  (var i = 0; i <= products.length; i++) { // number 2
  let product = products[i].split(":");
  
// number 3   
//**   console.log(product);
  let price = Number(product[1]);
//**   console.log(price);
  
// number 4
  total += price;
//* *  console.log(total.toFixed(2));
  
// number 5 
//?Esto esta bien?? product[1] sigue siendo number y lo estoy imprimiendo sin cambiar su tipo de dato 
  itemText = product[0] + "---" + product[1]; 
       console.log(itemText);
    /*


!itemText = 0;
  ! var listItem = document.createElement('li');
  ! listItem.textContent = itemText;
  ! list.appendChild(listItem);
*/
}

// !totalBox.textContent = 'Total: $' + total.toFixed(2);












  













  


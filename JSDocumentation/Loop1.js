const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');

   
for (const item of myArray){
    const listItem = document.createElement('li'); 
    listItem.textContent = item; 
    list.appendChild(listItem); 
}



    const section = document.querySelector('section');
    section.appendChild(list);
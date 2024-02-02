
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

  //Conditional


let days;

switch (choice){
  case "February":
    days = 30;
break;
  
case "April":
    days = 30;
break;

case "June":
    days = 30;
break;

case "September":
    days = 30;
break;

case "November":
    days = 30;
break;

default:
  days = 31;
}


}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');

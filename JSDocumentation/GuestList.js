//Guest list, which must separate 2 people who will not be admitted, at the end it is asked to fix the 
//strings since they end in "," and must be replaced with a "."

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for( const name of people ){

     if(name === "Phil" || name === "Lola"){
        refused.textContent += `${name}` + ", ";
 
     }

     else {
        admitted.textContent += `${name}`+ ", ";
     }

}

refused.textContent = refused.textContent.replace(/, $/, ".");
admitted.textContent = admitted.textContent.replace(/, $/, ".");
 
 

/* 4 variables que contengas un numero, que se sumen los primeros dos y se almacene en una varible.
 Restar el ultimo valor contra el penultimo y guardarlo en una varible. Multiplicar los dos ultimos 
 resultados y almacenarlos en una varibale (finalResult), y por ultimo, condicionar si el numero es par y 
 asignarlo a evenOddResult */

 let finalResult;
 let evenOddResult;

 let a = 1,b = 6,c = 194,d = 200;
 let suma = a + b;
 let resta = d - c;
 finalResult = suma * resta;
 
if (finalResult%2 === 0){
 
 evenOddResult = finalResult;

}



 // Don't edit the code below here!

 const section = document.querySelector('section');

 const para1 = document.createElement('p');
 const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
 para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
 const para2 = document.createElement('p');
 const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
 para2.textContent = evenOddResultCheck;

 section.appendChild(para1);
 section.appendChild(para2);
const quote = 'I dO nOT lIke gREen eGgS anD HAM';


    

    
/*  1.- Cambia la letra mayúscula para corregir con mayúscula inicial la oración (todo en minúsculas, 
excepto la primera letra mayúscula). Almacena la nueva cita en una variable llamada fixedQuote.*/

    const sliceQuote = quote.slice(1);
    let fixedQuote = "I" + sliceQuote.toLowerCase();
      console.log(fixedQuote);
      
// 2.- En fixedQuote, reemplaza "huevos verdes con jamón" con otro alimento que realmente no te guste.

    let index = fixedQuote.indexOf("green eggs and ham");
    fixedQuote = fixedQuote.slice(0, index);
      console.log(fixedQuote);
    fixedQuote =  fixedQuote + "liver with onions";

/* 3.- Hay una pequeña solución más por hacer: agrega un punto al final de la cita y guarda la versión 
final en una variable llamada finalQuote.*/

    let finalQuote = fixedQuote + ".";
    console.log(finalQuote);
    
    // Don't edit the code below here!

    const section = document.querySelector('section');

    const para1 = document.createElement('p');
    para1.textContent = fixedQuote;
    const para2 = document.createElement('p');
    para2.textContent = finalQuote;

    section.appendChild(para1);
    section.appendChild(para2);
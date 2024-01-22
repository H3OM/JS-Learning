// Add your code here
      /*En nuestra primera tarea de cadenas, comenzaremos con algo pequeño. Ya tienes la mitad de una cita 
      famosa dentro de una variable llamada quoteStart; nos gustaría que:
      
      Busques la otra mitad de la cita y la agregues al ejemplo dentro de una variable llamada quoteEnd.
      Concatenes las dos cadenas para hacer una sola cadena que contenga la cita completa. Guardes el resultado dentro de una variable llamada finalQuote.
      */
          
      const quoteStart = 'Don\'t judge each day by the harvest you reap ';
      const quoteEnd = 'but by the seeds that you plant.'
      
      let finalQuote = quoteStart + quoteEnd;
      
      // Don't edit the code below here!
      
      const section = document.querySelector('section');
      const para1 = document.createElement('p');
      para1.textContent = finalQuote;
      
      section.appendChild(para1);
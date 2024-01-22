  // Statement 1: The elephant weighs less than the mouse
  const eleWeight = 1000;
  const mouseWeight = 2;

  // Statement 2: The Ostrich is taller than the duck
  const ostrichHeight = 2;
  const duckHeight = 0.3;

  // Statement 3: The two passwords match
  const pwd1 = 'stromboli';
  const pwd2 = 'stROmBoLi';

  // Add your code here

  //Declaracion 1:
  let weightComparison = (mouseWeight > eleWeight);

  //Declaracion 2
  let heightComparison = (ostrichHeight > duckHeight);

  //Declaracion 3
  let pwdMatch = (pwd1 === pwd2);
  // Don't edit the code below here!

  const section = document.querySelector('section');

  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');

  const weightTest = weightComparison ? 'True — elephants do weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
  const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
  const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

  para1.textContent = weightTest;
  section.appendChild(para1);
  para2.textContent = heightTest;
  section.appendChild(para2);
  para3.textContent = pwdTest;
  section.appendChild(para3);
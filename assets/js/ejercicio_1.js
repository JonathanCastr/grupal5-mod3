//por medio de la desestructuración de objetos en javascript, se extraen las propiedades del objeto window y se asignan a las variables los ids que correspndan a cada referencia.
const {
    userForm,
    firstname,
    lastname,
    currentSalary,
    prevSemesterSalary,
    hasFamilyResponsib,
    numOfFamilyResponsib,
    currentSalaryDiv,
    hasFamilyResponsibDiv,
    numOfFamilyResponsibDiv,
    answerA,
    answerB,
  } = window;
  
  userForm.addEventListener('submit', onSubmit);
  hasFamilyResponsib.addEventListener('change', onHasFamilyResponsibChange);
  // Obtiene los datos ingresados por el usuario y limpia los resultados llamando a las demás funciones
  function onSubmit(e) {
    e.preventDefault();
    answerA.innerHTML = "";
    answerB.innerHTML = "";
    
    //guardamos los datos de la persona ingresada en el objeto persona
    const persona = {
      firstname: firstname.value,
      lastname: lastname.value,
      prevSemesterSalary: prevSemesterSalary.value,
      currentSalary: currentSalary.value,
      hasFamilyResponsib: hasFamilyResponsib.value,
      numOfFamilyResponsib: numOfFamilyResponsib.value,
    };
    printPersona(persona);
    //si es trabajador activo busca la funcion printsalary para realizar los calculos pertinentes
    if (persona.hasFamilyResponsib === 'SI'){
        
      printSalary(persona);
      
    }
  }
  
    
  // Si tiene cargas familiares, muestra el input numOfFamilyResponsib
  // caso contrario lo esconde y restablece su valor por defecto
  function onHasFamilyResponsibChange() {
    if (hasFamilyResponsib.value === 'SI' ) {
      numOfFamilyResponsibDiv.removeAttribute('hidden');
    } else {
      numOfFamilyResponsibDiv.setAttribute('hidden', '');
      numOfFamilyResponsib.value = '';
    }
  }
  // Imprime los datos de la persona ingresada
  function printPersona(persona) {
    const {
      firstname,
      lastname,
      prevSemesterSalary,
      currentSalary,
      hasFamilyResponsib,
      numOfFamilyResponsib,
    } = persona;
  
    answerA.innerHTML = `
    <p>Nombre: ${firstname} </p>
    <p>Apellido: ${lastname}</p>
  
    <p>Sueldo del semestre anterior: ${
      prevSemesterSalary || 'no registra salario en el semestre anterior'
    }</p>
  
    <p>Sueldo actual: ${currentSalary}</p>
  
    <p>Cargas familiares: ${
        hasFamilyResponsib === 'SI'
          ? numOfFamilyResponsib
          : 0
    }</p>
    `;
  }
  

 
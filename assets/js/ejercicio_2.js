 // Retorna el valor por carga familiar segun sueldo del semestre anterior
 function getFamilyAsignationValue(persona){
    const prevSemesterSalary = parseInt(persona.prevSemesterSalary);
    let familyAsignation;
    if (prevSemesterSalary <= 429899){
      familyAsignation = 20328;
    }
    else if (prevSemesterSalary > 429899 && prevSemesterSalary <= 627913 ){
      familyAsignation = 12475;
    }
    else if (prevSemesterSalary > 627913 && prevSemesterSalary <= 979330 ){
      familyAsignation = 3942;
    }
    else{
      familyAsignation = 0 ;
    }
    return familyAsignation;
  }
  // Imprime el valor del sueldo final, dependiendo de la cantidad de cargas y el valor por carga
  // y el sueldo actual
  function printSalary(persona){
    const familyAsignationValue = getFamilyAsignationValue(persona);
    let totalAsignation = 0;
    if (persona.hasFamilyResponsib === 'SI'){
      totalAsignation = parseInt(persona.numOfFamilyResponsib) * familyAsignationValue;
    }
    let totalSalary = parseInt(persona.currentSalary) + totalAsignation;
    answerB.innerHTML = `<p>La asignación por carga familiar es de: $${familyAsignationValue}</p> <p> El sueldo total con ${persona.numOfFamilyResponsib} carga es de : $${totalSalary}</p>`;
  }
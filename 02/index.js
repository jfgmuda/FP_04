// Obtener referencias a los elementos del formulario HTML
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const resultDiv = document.getElementById('result');

// Función a ejecutar para calcular los días
function calculateDays() {
  // Obtener los valores ingresados por el usuario
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Mostrar el elemento del resultado
  resultDiv.style.display = 'block';

  if (month >= 1 && month <= 12) {
    let daysInMonth = 0;
    
    if (month === 2) {
      // Si el mes es febrero:
      // Calculamos los días obteniendo el residuo del año en base a las condiciones dadas
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29;
      } else {
        daysInMonth = 28;
      }
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
      // Si el mes es: Enero, Marzo, Mayo, Julio, Agosto, Octubre ó Diciembre
      daysInMonth = 31;
    } else {
      // Si el mes es: Abril, Junio, Septiembre ó Noviembre
      daysInMonth = 30;
    }

    // Mostramos el resultado en el elemento correspondiente
    resultDiv.textContent = `El mes ${month} en el año ${year} tiene ${daysInMonth} días.`;
  } else {
    // Si el mes es 0, un número negativo o es mayor a 12 entonces mostramos este error
    resultDiv.textContent = "Ingrese un mes válido (1-12).";
  }
}

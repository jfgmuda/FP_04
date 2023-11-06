// Obtener referencias a los elementos del formulario HTML
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const num3Input = document.getElementById('num3');
const resultDiv = document.getElementById('result');

// Función a ejecutar para calcular el número mayor
function findMax() {
  // Obtener los valores ingresados por el usuario
  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  const num3 = parseInt(num3Input.value);

  // Mostrar el elemento del resultado
  resultDiv.style.display = 'block';

  // Validamos que sean números
  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    // Comparación de los números y se agrega un mensaje con el resultado
    if (num1 >= num2 && num1 >= num3) {
      resultDiv.innerHTML = `El número mayor es <b>${num1}</b>`;
    } else if (num2 >= num1 && num2 >= num3) {
      resultDiv.innerHTML = `El número mayor es <b>${num2}</b>`;
    } else {
      resultDiv.innerHTML = `El número mayor es <b>${num3}</b>`;
    }
  } else {
    resultDiv.innerHTML = "Ingrese tres números enteros válidos.";
  }
}

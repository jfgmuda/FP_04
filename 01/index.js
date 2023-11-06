// Obtener referencias a los elementos del formulario HTML
const unitsInput = document.getElementById('units');
const priceInput = document.getElementById('price');
const resultDiv = document.getElementById('result');

// Función a ejecutar para calcular el pago
function calculatePayment() {
  // Obtener los valores ingresados por el usuario
  const units = parseInt(unitsInput.value);
  const price = parseFloat(priceInput.value);

  // Calcular el subtotal
  const subtotal = units * price;

  // Calcular el descuento basado en la cantidad de unidades
  let discount = 0;
  if (units > 100) {
    discount = subtotal * 0.4;
  } else if (units >= 25) {
    discount = subtotal * 0.2;
  } else if (units >= 10) {
    discount = subtotal * 0.1;
  }

  // Calcular el total a pagar restando el descuento del subtotal
  const total = subtotal - discount;

  // Mostrar el elemento del resultado
  resultDiv.style.display = 'block';

  // Mostrar los resultados en el área de resultados
  resultDiv.innerHTML = `
    Subtotal: $${subtotal.toFixed(2)}<br>
    Descuento: $${discount.toFixed(2)}<br>
    Total a pagar: $${total.toFixed(2)}
  `;
};

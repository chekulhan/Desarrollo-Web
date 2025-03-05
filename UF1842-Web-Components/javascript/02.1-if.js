//Actividades de IF condicion


// Si la contraseña es correcta, muestra "Acceso permitido", si no, "Contraseña incorrecta".
// Simulando input
let passwordGuardado = "secreto123";
let passwordIngresado = "secreto123"; 





// Indicar si un numero es par o impar
let numero = 7;

if (numero % 2 ...


// Si la hora está entre las 9:00 y las 18:00, la tienda está abierta.
let horaActual = 15; // Simulación de la hora en formato 24h



/*
Dado un número del 0 al 100, asigna una calificación según la siguiente escala:

90 - 100 → Sobresaliente 🏆
70 - 89 → Aprobado ✅
50 - 69 → Necesita mejorar 🧐
< 50 → Reprobado ❌
*/


/* Actividad de HTML de banca

Objetivo:
Vas a crear una página web donde el usuario podrá introducir su saldo de cuenta bancaria, 
el número de transacciones recientes y si es cliente preferente.
Basado en estos datos, la página le dará una recomendación o advertencia sobre su situación financiera.


Formulario de Entrada de Datos: Crea un formulario donde los usuarios puedan introducir los siguientes datos:
- Saldo de la cuenta (en euros).
- Número de transacciones recientes (cuántas veces han movido dinero en la cuenta).
- ¿Es cliente preferente? (un checkbox que el usuario puede marcar).


Reglas de Negocio: Cuando el usuario ingrese su información y presione el botón de "Verificar Estado", el sistema debe mostrar un mensaje personalizado según las siguientes reglas:

- Si el saldo es mayor a 10,000 euros y el usuario es preferente, mostrar un mensaje con una recomendación especial (tipo de interés alto).
- Si el saldo es mayor a 10,000 euros pero el usuario no es preferente, mostrar un mensaje diciendo que puede abrir una cuenta premium.
- Si el saldo está entre 1,000 y 10,000 euros y el usuario ha hecho menos de 3 transacciones recientes, mostrar una advertencia para mantener el saldo.
- Si el saldo es menor de 1,000 euros, mostrar una advertencia diciendo que podría haber cargos por saldo insuficiente.

Por ejemplo:
Si el saldo es 5000 y el número de transacciones recientes es 1, el mensaje podría ser:
"Tu saldo es saludable. Te recomendamos mantener tu saldo por encima de 1,000 para evitar cargos adicionales."

*/


// RESPUESTAS:
let horaActual = 15; // Simulación de la hora en formato 24h

if (horaActual >= 9 && horaActual < 18) {
    console.log("🛍️ La tienda está ABIERTA.");
} else {
    console.log("🚪 La tienda está CERRADA.");
}



let nota = 85;  // Puedes cambiar este valor

if (nota >= 90) {
    console.log("🏆 Sobresaliente. ¡Muy bien!");
} else if (nota >= 70) {
    console.log("✅ Aprobado. ¡Sigue así!");
} else if (nota >= 50) {
    console.log("🧐 Necesita mejorar. ¡Puedes hacerlo!");
} else {
    console.log("❌ Reprobado. Necesitas estudiar más.");
}




/*


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estado de Cuenta Bancaria</title>
</head>
<body>
    <h1>Verificación de Cuenta Bancaria</h1>
    
    <!-- Formulario de entrada de datos -->
    <form id="formulario">
        <label for="saldo">Saldo de la cuenta (€): </label>
        <input type="number" id="saldo" name="saldo" required><br><br>

        <label for="transacciones">Número de transacciones recientes: </label>
        <input type="number" id="transacciones" name="transacciones" required><br><br>

        <label for="preferente">¿Es cliente preferente? </label>
        <input type="checkbox" id="preferente" name="preferente"><br><br>

        <button type="submit">Verificar Estado</button>
    </form>

    <p id="mensaje"></p>

    <script>
        // Función para manejar el formulario y mostrar el mensaje correspondiente
        document.getElementById('formulario').addEventListener('submit', function(event) {
            event.preventDefault();  // Evita que el formulario se envíe

            // Obtener los valores introducidos por el usuario
            let saldoCuenta = parseFloat(document.getElementById('saldo').value);
            let transaccionesRecientes = parseInt(document.getElementById('transacciones').value);
            let esClientePreferente = document.getElementById('preferente').checked;

            // Lógica financiera para determinar el tipo de interés o recomendación
            let mensaje = "";

            if (saldoCuenta > 10000 && esClientePreferente) {
                // Cliente tiene un saldo mayor a 10,000 y es preferente
                mensaje = "¡Felicidades! Eres un cliente preferente. Te ofrecemos un tipo de interés del 5% anual en tu cuenta de ahorros.";
            } else if (saldoCuenta > 10000 && !esClientePreferente) {
                // Cliente tiene más de 10,000 pero no es preferente
                mensaje = "¡Excelente! Tienes un saldo superior a 10,000. Considera abrir una cuenta premium para obtener mejores beneficios.";
            } else if (saldoCuenta <= 10000 && saldoCuenta >= 1000 && transaccionesRecientes < 3) {
                // Cliente tiene entre 1,000 y 10,000 y ha hecho menos de 3 transacciones
                mensaje = "Tu saldo es saludable. Te recomendamos mantener tu saldo por encima de 1,000 para evitar cargos adicionales.";
            } else if (saldoCuenta < 1000) {
                // Cliente tiene menos de 1,000 en su cuenta
                mensaje = "Alerta: Tu saldo es bajo. Considera depositar más dinero para evitar cargos por saldo insuficiente.";
            } else {
                // Condición predeterminada para cualquier otro caso
                mensaje = "Mantén un buen control sobre tu cuenta para aprovechar los mejores beneficios.";
            }

            // Mostrar el mensaje en la página
            document.getElementById("mensaje").innerText = mensaje;
        });
    </script>
</body>
</html>


*/
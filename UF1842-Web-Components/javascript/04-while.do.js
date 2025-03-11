// Demo
let count = 1;

while (count <= 3) {
    console.log("Count es: " + count);
    count++;
}

// do while
let num = 5;

do {
    console.log("Numero es: " + num);
    num++;
} while (num <= 3);


// Actividad 1:
/*
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While Loop Example</title>
</head>
<body>
    <h2>Mostrar numeros con un bucle WHILE</h2>
    <div id="number-list"></div>

    <script>
        let number = 1;  // Empezar
        let output = '';  // Crear una variable para guardar el resultado

        // Usar bucle while para mostrar los numeros 1 a 5 dentro de una etiqueta <p>
        
            output += '<p>Number: ' + number + '</p>';  // Crear un <p> para cada número
            

        // Insertar el resultado en el elemento HTML
        document.getElementById("number-list").innerHTML = output;

    </script>
</body>
</html>
*/
# Actividades de repaso

## Cuenta Bancaria
Objetivos:
- crear una clase
- implementar manjeo de errores
- instancia y usarla dentro de un proyecto de ReactJS

Vas a crear una clase en Javascript 'CuentaBancaria'. Esta clase mantendrá el saldo de la cuenta. Tendrá 2 métodos, uno para ingresar (depositar) dinero, y otro para quitar (retirar) dinero. OJO! No se puede sacar más de la cuenta. En este case, 'throw' un error.

Proceso de desarrollo:
1. Crear la clase CuentaBancaria.js y llevar a cabo unas pruebas en la consola de Chrome. Por ejemplo:
```javascript
const cuenta = new CuentaBancaria(100);

cuenta.depositar(50);
cuenta.retirar(25);
cuenta.retirar(100); // deberia indicar error (try, catch)
```
2. Implementar la interfaz de ReactJS (textbox para intrudicir una cantidad, 2 botones para ingresar y retirar esta cantidad)
3. Implementar la lógica usando JSX en ReactJS.
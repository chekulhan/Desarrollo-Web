# Tipos de Pruebas de Software

## 1. Pruebas unitarias (Unit Tests)
**Qué son**: Prueban pequeñas unidades de código, como funciones o métodos individuales, para verificar que funcionan correctamente.  

**Ejemplo**: Probar que una función que suma dos números devuelve el resultado correcto.  

**Herramientas**: Jest (JavaScript/React), PyTest (Python), JUnit (Java).  

## 2. Pruebas de integración (Integration Tests)
**Qué son**: Verifican cómo interactúan varios módulos o componentes entre sí.  

**Ejemplo**: Probar que un frontend React puede hacer una solicitud a una API y recibir la respuesta esperada.  

**Herramientas**: Mocha (JavaScript), Postman (para probar APIs), Selenium (para pruebas web).  

## 3. Pruebas funcionales (Functional Tests)
**Qué son**: Evalúan si el software cumple con los requisitos funcionales especificados.  

**Ejemplo**: Probar que un usuario puede iniciar sesión con credenciales válidas.  

**Herramientas**: Cypress, Selenium, TestCafe.  

## 4. Pruebas de sistema (System Tests)
**Qué son**: Prueban el sistema completo de extremo a extremo para asegurarse de que todos los componentes funcionen juntos correctamente.  

**Ejemplo**: Simular la experiencia de un usuario navegando en una plataforma de comercio electrónico desde el inicio de sesión hasta la compra.  

**Herramientas**: Cypress, Selenium, Playwright.  

## 5. Pruebas de aceptación (Acceptance Tests o UAT - User Acceptance Testing)
**Qué son**: Validan que el software cumple con los requisitos del cliente o usuario final.  

**Ejemplo**: Un cliente final revisa que la interfaz de usuario de su aplicación funcione como esperaba.  

**Herramientas**: TestRail, Cucumber.  

## 6. Pruebas de rendimiento (Performance Tests)
**Qué son**: Evalúan la velocidad, estabilidad y capacidad de respuesta del software bajo carga.  

**Ejemplo**: Medir cuántos usuarios simultáneos puede manejar una API sin que el tiempo de respuesta se degrade significativamente.  

**Herramientas**: JMeter, Locust, k6.  

## 7. Pruebas de carga (Load Tests)
**Qué son**: Verifican el comportamiento del sistema bajo una cantidad específica de usuarios o solicitudes.  

**Ejemplo**: Simular 100,000 usuarios en una aplicación web para ver si se mantiene estable.  

**Herramientas**: Apache JMeter, Gatling.  

## 8. Pruebas de estrés (Stress Tests)
**Qué son**: Llevan el sistema más allá de sus límites para evaluar su comportamiento en condiciones extremas.  

**Ejemplo**: Probar qué pasa cuando el servidor recibe el doble de tráfico que su capacidad máxima.  

**Herramientas**: JMeter, k6.  

## 9. Pruebas de regresión (Regression Tests)
**Qué son**: Se ejecutan después de cambios en el código para verificar que no se hayan introducido errores nuevos.  

**Ejemplo**: Después de agregar una nueva función a una app, se ejecutan pruebas anteriores para asegurarse de que todo sigue funcionando bien.  

**Herramientas**: Jest, Selenium, Cypress.  

## 10. Pruebas de seguridad (Security Tests)
**Qué son**: Evalúan la seguridad del sistema para detectar vulnerabilidades.  

**Ejemplo**: Buscar inyecciones SQL o pruebas de autenticación de usuarios.  

**Herramientas**: OWASP ZAP, Burp Suite.  

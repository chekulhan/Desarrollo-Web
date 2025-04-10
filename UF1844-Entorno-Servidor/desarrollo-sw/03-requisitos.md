# Acceptance Criteria (Criterios de Aceptación) 

https://www.youtube.com/watch?v=07vXryxPcMA

En cuanto al *Acceptance Criteria (Criterios de Aceptación)*, es una parte importante de la historia de usuario porque define las condiciones que deben cumplirse para que la historia se considere completada. En otras palabras, los criterios de aceptación ayudan a entender cuándo una funcionalidad está "lista" y funcionando como se espera.

Son un conjunto de **condiciones o pruebas** que deben cumplirse para validar que la historia de usuario o el requerimiento ha sido implementado correctamente.

**Los criterios de aceptación proporcionan una lista específica de requisitos que deben cumplirse para que la funcionalidad esté lista para su uso.**



## Usar el Formato "DADO, CUANDO, ENTONCES" (GIVEN, WHEN, THEN)
Este formato es una excelente manera de estructurar los Acceptance Criteria, ya que define claramente las condiciones iniciales, la acción y el resultado esperado.

- DADO: La situación inicial o las condiciones previas.
- CUANDO: La acción que el usuario realiza.
- ENTONCES: El resultado esperado o el comportamiento del sistema.


## Ejemplo
**Historia de Usuario:**
"COMO usuario registrado, quiero poder restablecer mi contraseña para poder acceder a mi cuenta si olvido mi contraseña."

**Acceptance Criteria:**
DADO que el usuario está en la pantalla de inicio de sesión,
CUANDO hace clic en el enlace "Olvidé mi contraseña",
ENTONCES el sistema debe mostrar un formulario donde el usuario puede ingresar su correo electrónico.

DADO que el usuario ha ingresado una dirección de correo electrónico válida,
CUANDO hace clic en "Enviar enlace de restablecimiento",
ENTONCES el sistema debe enviar un correo electrónico con un enlace de restablecimiento de contraseña al correo proporcionado.

DADO que el usuario ha recibido el correo electrónico,
CUANDO hace clic en el enlace de restablecimiento de contraseña,
ENTONCES el sistema debe redirigir al usuario a una página donde pueda ingresar una nueva contraseña.

DADO que el usuario ha ingresado una nueva contraseña que cumple con los requisitos (al menos 8 caracteres, una letra mayúscula, un número),
CUANDO hace clic en "Guardar nueva contraseña",
ENTONCES el sistema debe actualizar la contraseña y redirigir al usuario a la página de inicio de sesión con un mensaje que indique que la contraseña se ha restablecido correctamente.

DADO que el usuario ha ingresado un correo electrónico que no está registrado,
CUANDO hace clic en "Enviar enlace de restablecimiento",
ENTONCES el sistema debe mostrar un mensaje de error que indique que no se ha encontrado una cuenta con ese correo electrónico.

DADO que el usuario está en la página de restablecimiento de contraseña,
CUANDO intenta enviar la nueva contraseña sin cumplir con los requisitos de seguridad (por ejemplo, menos de 8 caracteres o sin una letra mayúscula),
ENTONCES el sistema debe mostrar un mensaje de error indicando que la contraseña no cumple con los requisitos.

## Actividad

"Como usuario, quiero poder recuperar mi correo electrónico si lo he olvidado, para poder acceder a mi cuenta."

Construir criterios de acceptacion para este historia de usuario.


## Resumen:
- Los Acceptance Criteria deben ser claros, específicos y medibles.
- Utiliza un formato estructurado como "DADO, CUANDO, ENTONCES".
- Asegúrate de cubrir tanto los casos felices como las excepciones.
- Los criterios deben ser testeables para asegurar que la funcionalidad esté correcta.




## Respuestas
DADO que el usuario está en la pantalla de inicio de sesión,
CUANDO hace clic en el enlace "Olvidé mi correo electrónico",
ENTONCES el sistema debe mostrar un formulario donde el usuario pueda ingresar su nombre de usuario o número de teléfono para recuperar su correo electrónico.

DADO que el usuario ha ingresado un nombre de usuario o número de teléfono válido,
CUANDO hace clic en "Enviar correo electrónico",
ENTONCES el sistema debe enviar un correo electrónico con el correo registrado asociado al nombre de usuario o número de teléfono proporcionado.

DADO que el usuario ha ingresado un nombre de usuario o número de teléfono que no está registrado,
CUANDO hace clic en "Enviar correo electrónico",
ENTONCES el sistema debe mostrar un mensaje de error que indique que no se encontró ningún correo electrónico asociado a esa cuenta.

DADO que el usuario ha recibido el correo electrónico de recuperación,
CUANDO hace clic en el enlace de recuperación,
ENTONCES el sistema debe redirigir al usuario a la página de inicio de sesión con el correo electrónico visible.

## Definition of Done (DoD)
Definición: Es una lista de condiciones que un producto o una tarea debe cumplir para considerarse completa. Es más amplia que los Acceptance Criteria y se aplica a un entregable completo, no a una historia de usuario específica.

Diferencia: Los Acceptance Criteria son específicos de la historia de usuario y definen cuándo esa historia está "terminada" en términos de funcionalidad. La Definition of Done se refiere a las condiciones generales bajo las cuales cualquier trabajo (historia de usuario, tarea o incremento de producto) se considera terminado.

Ejemplo de DoD:

- El código ha sido revisado por pares.
- Los tests automatizados han pasado exitosamente.
- La documentación está actualizada.


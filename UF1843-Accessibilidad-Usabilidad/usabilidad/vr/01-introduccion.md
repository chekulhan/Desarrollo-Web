# Realidad Virtual y la Realidad Aumentada (AR)

La Realidad Virtual (VR) y la Realidad Aumentada (AR) son dos tecnologías inmersivas, pero tienen enfoques muy diferentes sobre cómo interactuamos con el mundo digital y el físico. Ambas tienen un gran potencial para mejorar la usabilidad y la accesibilidad, pero lo hacen de formas distintas. 

## Realidad Virtual (VR):
La Realidad Virtual es una tecnología que sumerge al usuario en un entorno completamente digital o simulado. A través de dispositivos como gafas VR, el usuario está aislado del mundo físico y se encuentra en un mundo virtual donde puede interactuar con objetos y escenarios generados por computadora.

**Características clave:**

- Aislación del mundo real: El usuario es completamente sumergido en un entorno virtual.
- Requiere hardware específico, como cascos o gafas VR y, en algunos casos, guantes o controladores de mano.
- Se utiliza principalmente para entretenimiento (videojuegos), simulaciones, formación, y diseño.

**Usabilidad y accesibilidad:**

- Mejora de la usabilidad: En VR, los interfaces pueden diseñarse de manera intuitiva, usando gestos o controladores, lo que hace que la interacción sea más directa y natural.
- Accesibilidad: Para personas con movilidad limitada, la VR puede ofrecer entornos donde se simulan tareas físicas sin necesidad de moverse. Sin embargo, la tecnología también puede resultar desafiante para personas con ciertos trastornos de percepción, ya que el aislamiento del mundo real puede causar problemas de orientación o mareos (mareo por movimiento).

## Realidad Aumentada (AR):
La Realidad Aumentada, en cambio, mezcla el mundo físico con elementos digitales. A través de dispositivos como smartphones, tablets o gafas AR, los usuarios pueden ver y experimentar su entorno real enriquecido con información adicional, como imágenes, videos, o datos interactivos superpuestos sobre lo que están viendo.

**Características clave:**

- Integración del mundo real y el digital: La AR permite que los usuarios interactúen con objetos virtuales que se superponen en su entorno físico.
- Requiere dispositivos como smartphones o gafas AR que proyecten información adicional sobre el mundo real.
- Utilizada en aplicaciones como navegación en tiempo real, juegos interactivos, formación, y mejoras en el diseño industrial.

**Usabilidad y accesibilidad:**

Mejora de la usabilidad: La AR permite a los usuarios interactuar con su entorno sin perder el contacto con la realidad. Esto facilita la comprensión y el aprendizaje, ya que la información se proporciona de manera visual y contextualizada. Por ejemplo, en entornos educativos o de formación, los usuarios pueden recibir indicaciones visuales que les guían en el proceso.

Accesibilidad: Las aplicaciones de AR pueden ayudar a personas con discapacidades visuales o cognitivas al proporcionar información adicional sobre el entorno real, como instrucciones o etiquetas en objetos. También puede facilitar la navegación en personas con discapacidad motora, proporcionando ayudas visuales y pistas de interacción.



# Herramientas / Bibliotecas
https://r3f.docs.pmnd.rs/getting-started/installation

## A-frame
https://aframe.io/docs/1.7.0/introduction/

aframe-react es un wrapper sobre a-frame, para que sea más *React*

https://www.npmjs.com/package/aframe-react


```bash
 npm install aframe aframe-react
```

```jsx

import React from 'react';
import { Entity, Scene } from 'aframe-react';
import 'aframe';

const VRScene = () => {
  return (
    <Scene>
      <Entity primitive="a-box" position="0 1.5 -3" rotation="0 45 0" color="#4CC3D9" />
      <Entity primitive="a-sphere" position="2 1 -5" radius="1.25" color="#EF2D5E" />
      <Entity primitive="a-cylinder" position="-2 1 -5" radius="0.5" height="2" color="#FFC65D" />
      <Entity primitive="a-plane" position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" />
      <Entity primitive="a-sky" color="#ECECEC" />
    </Scene>
  );
};

export default VRScene;
```

**Puede ser más sencillo usar el aframe directamente:**


```jsx
import React from 'react';
import 'aframe';

const VRScene = () => {
  return (
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-box position="-2 0.5 -3"  color="red"></a-box>
   </a-scene>
  );
};

export default VRScene;
```

Recordar, para ReactJS, hay que cerrar las etiquetas:

```jsx
<img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
```

Seguir los ejemplos y tutorials en:
https://aframe.io/docs/1.7.0/guides/building-a-basic-scene.html

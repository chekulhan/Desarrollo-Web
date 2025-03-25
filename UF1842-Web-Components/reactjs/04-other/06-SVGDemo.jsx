
  /* Recordar:
  
  - quitar fill color
  - <g> para grupar
  - aplicar className={styles.lightGroup} a cada grupo
  - aplicar id a cada elemento

  */

import React from 'react';
import styles from './SVGDemo.module.css';  // Import your CSS module for styling

const SVGDemo = () => {
  return (
    <div>
      <h2>SVG Demo</h2>


        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="100" fill="white"/>
          
          <g className={styles.lightGroup}>
            <path id="light1" opacity="0.8" d="M37.1188 49.4997L9.47255 69.9919L9.26587 29.2893L37.1188 49.4997Z"/>
          </g>

          <g className={styles.darkGroup}>
            <path id="dark1" opacity="0.8" d="M74.1189 49.4997L46.4725 69.9919L46.2659 29.2893L74.1189 49.4997Z" />
            <path id="dark2" opacity="0.8" d="M55.1189 49.4997L27.4725 69.9919L27.2659 29.2893L55.1189 49.4997Z" />
          </g>

        </svg>


    </div>
  );
};

export default SVGDemo;
  
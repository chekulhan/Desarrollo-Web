import React, { useState } from 'react';
import LargeImage from './LargeImage';

export const LazyLoad = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <h2>Ejemplo sin Lazy Loading</h2>
      <button onClick={() => setShowImage(true)}>Mostrar Imagen Grande</button>

      {showImage && <LargeImage />}
    </div>
  );
}
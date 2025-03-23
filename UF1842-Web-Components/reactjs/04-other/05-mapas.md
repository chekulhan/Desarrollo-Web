# Mapas con React-Leaflet

https://react-leaflet.js.org/
https://www.openstreetmap.org/#map=6/40.01/-2.49

```bash
npm install react-leaflet leaflet
```

Ejemplo
```jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Required for proper rendering

function LeafletMap() {
 
const position = [43.315238585264154, -1.9906867941271458];

return (
    <div>
      <h1>Leaflet Mapa</h1>
      <MapContainer
        center={[43.31458286118951, -1.99170603259654]} // Coordinadas de Madrid, España
        zoom={13} 
        scrollWheelZoom={true} 
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={position}>
        <Popup>
            Aqui estas
        </Popup>
        </Marker>
        
      </MapContainer>
      
    </div>
  );
}

export default LeafletMap;
```


Y si cambias el TileLayer por otro:

```jsx
<TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
  attribution="&copy; <a href='https://www.esri.com'>Esri</a> &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
/>
```


Ejemplo con buscada:
```jsx

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function SearchMap() {
  const [searchTerm, setSearchTerm] = useState("");
  const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]); // Default position (London)
  const [locationName, setLocationName] = useState("");

  // Function to handle the search using Promise
  const handleSearch = () => {
    const url = `https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json&addressdetails=1`;

    // Create a promise that fetches the data from Nominatim API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        // TO DO: Mirar los datos devueltos
        
        if (data.length > 0) {
          const { lat, lon, display_name } = data[0];
          setMarkerPosition([lat, lon]);
          setLocationName(display_name);
        } else {
          alert("Ubicacion no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error fetching ubicacion:", error);
        alert("Error fetching ubicacion");
      });
  };

  // Custom hook to update map center when markerPosition changes
  function UpdateMapCenter() {
    const map = useMap(); // Get the map instance

    React.useEffect(() => {
      map.setView(markerPosition, 13); // Set the map center to the new position with zoom level 13
    }, [markerPosition]); // Effect runs whenever markerPosition changes

    return null;
  }

  return (
    <div>
      <h1>Search Location on Map</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Introudcir una ubicación"
      />
      <button onClick={handleSearch}>Buscar</button>

      <MapContainer
        center={markerPosition}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <UpdateMapCenter /> {/* This ensures the map center updates */}
        <Marker position={markerPosition}>
          <Popup>{locationName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default SearchMap;

```
# Actividad

![Profile Card ](../../../../../x-assets/UF1842/react.ProfileCard.png)

Usando ProfileCard.module.css, crear un componente para mostrar dos perfiles en la página principal. 

Pistas:
Tu componente funcional comienzo con:

```javascript
const ProfileCard = ({ nombre, edad, bio, profileImage }) => {
```

y por lo tanto el App.js, donde lo colocas el componente functional, aparecerá como:
```javascript
 <ProfileCard 
    nombre="Mark Dwain"
    edad={42}
    bio="Entusiasta de la tecnología con más de 20 años de experiencia en la industria. Le encanta hacer senderismo."
    profileImage="https://picsum.photos/200/300?random=2"
/>
```


**Avanzado:**
Convertir los perfiles en un ARRAY, y mostrar los resultados con un map.

```
const profiles = [{nombre:"Maria Fernandez",
    edad:45,
    bio:"Entusiasta de deportes, especialmente yoga y pilates. Le encanta hacer senderismo.",
    profileImage: "https://picsum.photos/200/300?random=2" },

    {nombre:"Juan",
      edad:45,
      bio:"Entusiasta de deportes, especialmente yoga y pilates. Le encanta hacer senderismo.",
      profileImage: "https://picsum.photos/200/300?random=3" }
  ]

```


**Respuesta:**


```javascript

  {profiles.map((profile, index) => (
      <ProfileCard key={index} 
      nombre={profile.nombre}
      edad={profile.edad}
      bio={profile.bio}
      profileImage={profile.profileImage}
    />
    ))}

```


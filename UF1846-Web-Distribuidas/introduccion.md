# Sistemas distribuidos

## Monolítico vs Microservicios

https://www.youtube.com/watch?v=WnHZ5m4jtWo

## Serverless


## Event-driven


## Actividades de repaso
```js
const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Germany: "Berlin",
  Italy: "Rome",
  Portugal: "Lisbon"
};
```

Usando la consola de Chrome:
- mostrar la lista de los claves (Spain, France, ...), y la lista de los valores (Madrid, Paris...). 
- filtrar el array de capitales para mostrar los capitales con 6 o más letras. 

**Objectivos**: Usar Object objecto. Usar array métodos de filter



```js
let valores = '123456';
```
Usando la consola de Chrome:
- Conseguir un nuevo array, convertiendo los valores en un Array de numéros. Usar el segundo parámetro de Array.from() para convertir el tipo de dato.
- Conseguir un nuevo array, multiplcando cada numero por 10. Aplicar el cálculo en el segundo parámetro de Array.from().

**Objectivos**: Usar Array.from().

```js
const countries = [
  { name: "Spain", capital: "Madrid" },
  { name: "France", capital: "Paris" },
  { name: "Germany", capital: "Berlin" },
  { name: "Italy", capital: "Rome" },
  { name: "Portugal", capital: "Lisbon" }
];
```
Usando la consola de Chrome:
- Buscar los paises que empiezan con "P", como Portugal
- ¿Qué hacen estos comandos?: /n$/.test('Lisbon');   'Berlin'.match(/n$/);
¿Puedes buscar los capitales que empiezan con P como Portugal y/o terminan en 'n', como Berlin o Lisbon?

Objectivos: Usar array métodos de filter, regex test() y match()



Queremos añadir un atributo de más a cada uno de los objectos, siendo su valor ubicación en la lista.
```js
{name: 'Spain', capital: 'Madrid', loc: 0}
{name: 'France', capital: 'Paris', loc: 1} 
{name: 'Germany', capital: 'Berlin', loc: 2}
```

Objectivos: Usar array metodo map con un objeto

## Respuestas

```js
let b = a.filter((item) => item.length >= 6)

Array.from(valores, Number)
Array.from(valores, (c) => Number(c) * 10)

countries.filter((c)=> c.name.startsWith('P'));
countries.filter((c)=> /^P/.test(c.name)); 
countries.filter((c) => /n$/.test(c.capital))

countries.map((c, index) => (
    {...c,
    loc: index}
));

```
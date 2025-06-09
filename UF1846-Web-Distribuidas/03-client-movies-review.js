import promptSync from 'prompt-sync';
import connectDB from './db-mongodb.js';

const prompt = promptSync();

async function main() {
  const db = await connectDB();
  const collection = db.collection('movies'); 

  while (true) {
    const action = prompt('¿Qué quieres hacer? ').toLowerCase();

    if (action === 'exit') {
      console.log('Exiting...');
      process.exit(0);
    } else if (action === 'buscar') {
        // buscar por algun datos de la pelicula
        
    } else if (action === 'insert') {
      // insertar un nueve user - preguntar al usuario por los datos para insertar
      
    }

    // Borrar
    // Borrar una pelicula basado en el criterio de busqueda. 
    //    Solo puedes borrar uno, asi que se se devuelve mas de uno, mostrar un mensaje

    // Actualizar
    // actualizar el plot (argumento) y el rating (rated) de una pelicula. 

  }

}

main();



/*



Llevar a cabo los siguientes buscadas usando MongoDB Atlas

- las películas que no son type: 'movies'
- las películas que contiene la palabra 'tradition' en su plot (argumento)
- las películas con un atributo rated de "TV-G" o "G"
- las películas con atributo awards.wins igual a 1
- las películas con el idioma (languages) igual a 'Basque'





const result = await collection.updateOne(
        { title: titleToUpdate.trim() },
        { $set: { plot: newPlot, rated: newRated } }
      );

if (result.deletedCount === 1) {
*/
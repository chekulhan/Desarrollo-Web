function fetchData (id) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(`Data para ${id}`);
        }, 1000)
    })
}

const promise1 = fetchData(1);
const promise2 = fetchData(2);
const promise3 = fetchData(4);


Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log("Data received");
    console.log(results);
})
.catch((error)=> {
    console.error("Error en promesa");
})


/* ACTIVIDAD 1 -----------------


function getProfile() {
    // devolver un mensaje de Profile 'Profile obtenido'
}

function getPosts() {
    // devolver un mensaje de Posts 'Posts obtenidos'
}

function getFriends() {
    // devolver un mensaje de Amigos 'Amigos obtenidos'
}


ACTIVIDAD 2 -----------------

import fs from 'fs';

fs.readFile('file1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});


Podrias convertir el código de Callback en una promesa (Promise(resolve, reject))?

El objetivo uno es poder usar async/await:

const result = await readFile('file1.txt');
console.log(result);

Y el objetivo es usar multiples promesas:

Promise.all([readFile('file1.txt'), readFile('file2.txt')])
  .then(([data1, data2]) => {
    console.log(data1, data2)
  })
  .catch(err => {
    // handle any error from either promise
  });

*/








/*

-------------------------------------------
function fetchData (id) {
    let timeOut = 1000;

    return new Promise((resolve, reject) => {
        
        if (id == 1) {
            timeOut = 2000;
        }

        setTimeout(()=> {
            if (id == 3) {
                reject(`Error para ${id}`);
            }
            else {
                resolve(`Data para ${id}`);
            }
            
        }, timeOut)
    })
}





function getProfile() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User Profile"), 1000);
  });
}

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User Posts"), 1500);
  });
}

function getFriends() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Friends List"), 1200);
  });
}


Promise.all([getPosts(), getFriends(), getProfile()])
.then((results) => {
    console.log("Data received");
    console.log(results);
})
.catch((error)=> {
    console.error("Error en promesa");
})



*/
//import {hostname, type} from 'node:os';
//import {sum, multiply} from './a2.js';

import fs from 'fs';


console.log('Hola');

//console.log(`Hola ${hostname} y ${type}`);
console.log('hola again');
//console.log(sum(1, 4));
//console.log(multiply(2, 3));

const FILE = './abc.json';

fs.readFile(FILE, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

const url = 'https://jsonplaceholder.typicode.com/posts/1';


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

console.log("Hola 2");
console.log(process.env);
console.log(process.version);
console.log(process.argv);

const express = require('express');

// Función de validación sin regex
function validarHistoriaUsuario(historia) {
    historia = historia.trim();
    return historia.startsWith("Como") && historia.includes("quiero") && historia.includes("para que");
}

// Ruta para procesar el formulario
router.post('/enviar-historia', (req, res) => {
    const { historiaUsuario, prioridad, fechaCaptura, responsable } = req.body;

    if (!validarHistoriaUsuario(historiaUsuario)) {
        return res.status(400).send("Error: La historia debe seguir el formato 'Como ..., quiero ..., para que ...'");
    }

    console.log({ historiaUsuario, prioridad, fechaCaptura, responsable });
    res.send("¡Historia de usuario enviada con éxito!");
});


// version de guardar los datos en la memoria

let historiasUsuarios = [];

historiasUsuarios.push({ 
    historiaUsuario: "COMO un tester, QUIERO una calculadora PARA calcular correctamente y ahorrar tiempo",
    prioridad: 1, 
    fechaCaptura: "12/3/2025", 
    responsable: "Jon" 
});


app.get('/showstories', (req, res) => {
  res.render('showstories', {historiasUsuarios});
});

app.get('/sendstories', (req, res) => {
  res.render('sendstories', {historiasUsuarios});
});

app.post('/sendstories', (req, res) => {
  console.log(req.body);
  const { historiaUsuario, prioridad, fechaCaptura, responsable } = req.body;
  
  // Simple validation (No regex)
  if (!historiaUsuario.includes("quiero") || !historiaUsuario.includes("para que")) {
      return res.status(400).send("Error: La historia debe seguir el formato 'Como ..., quiero ..., para que ...'");
  }

  historiasUsuarios.push({ historiaUsuario, prioridad, fechaCaptura, responsable });
  res.redirect('/showstories'); // Redirect to view the table
});



// avanzado - guardar datos en un archivo JSON en /data directory
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataFilePath = path.join(__dirname, '../data/historias.json');

// Function to read stories from JSON file
function readHistorias() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return []; // Return an empty array if file doesn't exist or is corrupted
    }
}

// Function to save stories to JSON file
function saveHistorias(historias) {
    fs.writeFileSync(dataFilePath, JSON.stringify(historias, null, 2), 'utf8');
}

// Validation function (Without Regex)
function validarHistoriaUsuario(historia) {
    historia = historia.trim();
    return historia.startsWith("Como") && historia.includes("quiero") && historia.includes("para que");
}

// POST: Save user story
router.post('/enviar-historia', (req, res) => {
    const { historiaUsuario, prioridad, fechaCaptura, responsable } = req.body;

    if (!validarHistoriaUsuario(historiaUsuario)) {
        return res.status(400).send("Error: La historia debe seguir el formato 'Como ..., quiero ..., para que ...'");
    }

    const historiasUsuarios = readHistorias(); // Load existing stories
    historiasUsuarios.push({ historiaUsuario, prioridad, fechaCaptura, responsable });

    saveHistorias(historiasUsuarios); // Save to JSON file

    res.redirect('/ver-historias'); // Redirect to table
});

// 📌 GET: Display all user stories in a table
router.get('/ver-historias', (req, res) => {
    const historiasUsuarios = readHistorias();
    res.render('userStoryTable', { historiasUsuarios });
});


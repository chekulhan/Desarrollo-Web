import { Router } from 'express';
import { ObjectId } from 'mongodb';

// TO DO 3. Tenemos que definir este middleware para autorizar un usuario
import { authoriseOwnership } from '../middleware/authorise.js';

const router = Router();

// Simular un role de un usuario
router.use((req, res, next) => {
    const role = req.headers['x-user-role'] || 'guest';
    
    // TO DO 1. : tenemos que conseguir la identidad del usuario - 'x-user-id'

    req.role = role; // a partir de ahora, cualquier routa tiene acceso


    next();
})


// GET /api/v1/users/683536ff702fa24a37aac4f2  (ObjectId)

// TO DO 2. habrá que añadir middleware para authoriseOwnership, antes de dejar que cualquiera entra en este funcion
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Validate ObjectId format before querying to avoid errors
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid user ID format' });
    }

    const db = req.app.locals.db; // get db instance from app.locals
    const user = await db.collection('usuarios').findOne({_id: new ObjectId(id)});
    
    const exists = user !== null; // returns json 
    res.json(exists); 

  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});


export default router;

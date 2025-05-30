import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { authoriseOwnership } from '../middleware/authorise.js';

const router = Router();

// Simular un role de un usuario
router.use((req, res, next) => {
    const role = req.headers['x-user-role'] || 'guest';
    const userId = req.headers['x-user-id']; 

    req.role = role; // a partir de ahora, cualquier routa tiene acceso
    req.userId = userId;

    next();
})


// GET /api/v1/users
router.get('/:id', authoriseOwnership('read:own'), async (req, res) => {
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



// Middleware

export function authoriseOwnership(permission) {
  return (req, res, next) => {
    const userRole = req.role;
    const userId = req.userId;

    // Check if role exists and has the permission
    if (!roles[userRole] && roles[userRole].includes(permission)) {
      return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
    }

    if (permission === 'read:own') {
      const requestedId = req.params.id;
      console.log('here' ,requestedId, userId );
      if (!requestedId == userId) {
        return res.status(403).json({ message: 'Forbidden: cannot access other user\'s data' });
      }
    }

    next();
    
  };
}

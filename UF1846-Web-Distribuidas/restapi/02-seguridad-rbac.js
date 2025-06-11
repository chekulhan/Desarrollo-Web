import { Router } from 'express';
import { authorise } from '../middleware/authorise.js';

const router = Router();

// Simular un role de un usuario
router.use((req, res, next) => {
    const role = req.headers['x-user-role'] || 'guest';
    
    req.role = role; // a partir de ahora, cualquier routa tiene acceso
    next();
})



// GET /api/v1/seguridad/rbac
// solo compueba un nivel de acceso a la vez

router.get('/users', authorise('read:any'),  async (req, res) => {

    try {
        res.json({message: "exito", role: req.role});

    } catch (error) {
        console.error("Error fetching :", error);
        res.status(500).json({ error: 'Failed to fetch seguridad' });
    }
});



export default router;
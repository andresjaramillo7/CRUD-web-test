import express from 'express';
const router = express.Router();

import customerController from '../controllers/customerController.mjs';

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);

router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

export default router;
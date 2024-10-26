import express from 'express';
import { addContainer, addItemToContainer, getContainers } from '../controllers/cargoController.js';
import userController from "../controllers/userController.js"

const uc = new userController();

const router = express.Router();

router.post('/admin/login', uc.loginAdmin);
router.post('/admin/register', uc.registerAdmin);
router.post('/admin/container', addContainer);
router.post('/admin/container/item', addItemToContainer);
router.get('/admin/:adminId/containers', getContainers);

export default router;

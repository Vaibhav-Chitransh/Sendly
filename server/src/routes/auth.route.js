import express from 'express';
import { login, logout, register } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/signup', register);

export default router;
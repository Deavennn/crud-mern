import express from 'express';
import { getUsers, savedUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

const router = express();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', savedUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;

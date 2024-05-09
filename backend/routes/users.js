import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controller/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router()

//create new User
router.post('/',verifyUser, createUser);
//update new User
router.put('/:id',verifyUser, updateUser);
//delete new User
router.delete('/:id',verifyUser, deleteUser);
//getSingle User
router.get('/:id',verifyUser, getSingleUser);
//getAll User
router.get('/', verifyAdmin, getAllUser);

export default router;
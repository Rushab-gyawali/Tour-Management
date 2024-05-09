import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controller/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

//create new tour
router.post('/', verifyAdmin, createTour);
//update new tour
router.put('/:id', verifyAdmin, updateTour);
//delete new tour
router.delete('/:id', verifyAdmin, deleteTour);
//getSingle tour
router.get('/:id', getSingleTour);
//getAll tour
router.get('/', getAllTour);
//get tour by search
router.get('/search/getTourBySearch', getTourBySearch);
//get feautred tour
router.get('/search/getFeaturedTour', getFeaturedTour)
//get tour count
router.get('/search/getTourCount',getTourCount)
export default router;
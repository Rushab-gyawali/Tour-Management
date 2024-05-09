import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controller/tourController.js';

const router = express.Router()

//create new tour
router.post('/', createTour);
//update new tour
router.put('/:id', updateTour);
//delete new tour
router.delete('/:id', deleteTour);
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
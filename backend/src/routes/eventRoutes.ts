import express from 'express';
import { Router } from 'express';
import * as showCtrl from '../controllers/eventsController';
import { asyncHandler } from '../utils/asyncHandler';

const eventsRouter = Router();


eventsRouter.get('/', asyncHandler(showCtrl.getAllEvents))
// router.get('/:id', showCtrl.getShowsById)
eventsRouter.post('/', asyncHandler(showCtrl.createEvent))
// router.patch('/:id', showCtrl.updateShow)
// router.delete('/:id', showCtrl.deleteShow)


export default eventsRouter
import { Router } from 'express';
import { addEvent, updateEvent, deleteEvent, getEventById, listEvents } from '../controllers/eventController';

const router = Router();

router.post('/', addEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.get('/:id', getEventById);
router.get('/', listEvents);

export default router;

import { Router, response } from 'express';
import chirpsRouter from './chirps';

const router = Router();

router.use('/chirps', chirpsRouter); 

export default router;

0
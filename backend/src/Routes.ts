
import { Router } from 'express';
import multer from  'multer'
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './confg/UpLoad'


const routes = Router();
const upload = multer(uploadConfig);


routes.get('/orphanages',OrphanagesController.list);
routes.get('/orphanages/:id',OrphanagesController.show); 
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;
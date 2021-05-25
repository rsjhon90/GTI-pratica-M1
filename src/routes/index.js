import { Router } from 'express';
import carsRouter from './cars.routes.js';

const routes = Router();

routes.use('/marcas/', carsRouter);

export default routes;
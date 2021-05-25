import { Router } from 'express';
import CarsRepository from '../repositories/CarsRepository.js';

const carsRouter = Router();

carsRouter.get('/', async (request, response) => {
  try {
  const cars = await CarsRepository();

  return response.json(cars);
  } catch (err) {
    return response.json({ error: err.message });
  }
});

export default carsRouter;
import { Router } from 'express';
import brandWithMoreModels from '../services/moreModels.js';
import brandWithFewerModels from '../services/fewerModels.js';
import findBiggestBrands from '../services/moreModelsList.js';

const carsRouter = Router();

carsRouter.get('/maisModelos', async (request, response) => {
  try {
  const biggerBrand = await brandWithMoreModels();

  return response.json(biggerBrand);
  } catch (err) {
    return response.json({ error: err.message });
  }
});

carsRouter.get('/menosModelos', async (request, response) => {
  try {
  const smallBrand = await brandWithFewerModels();

  return response.json(smallBrand);
  } catch (err) {
    return response.json({ error: err.message });
  }
});

carsRouter.get('/listaMenosModelos/:id', async (request, response) => {
  try {
    
  } catch (err) {
    return response.json({ error: err.message });
  }
});

export default carsRouter;
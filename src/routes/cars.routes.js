import { Router } from 'express';
import { brandWithMoreModels, brandWithFewerModels} from '../services/brandSB.js';
import { findBiggestBrands, findSmallerBrands } from '../services/brandsList.js';

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

carsRouter.get('/listaMaisModelos/:id', async (request, response) => {
  try {
    const biggerList = await findBiggestBrands(request.params.id);

    return response.json(biggerList);
  } catch (err) {
    return response.json({ error: err.message });
  }
});

carsRouter.get('/listaMenosModelos/:id', async (request, response) => {
  try {
    const smallerList = await findSmallerBrands(request.params.id);

    return response.json(smallerList);
  } catch (err) {
    return response.json({ error: err.message });
  }
});

carsRouter.post('/listaModelos', async (request, response) => {
  try {
    const { nomeMarca } = request.body;


  } catch (err) {
    response.json({ error: err.message });
  }
})

export default carsRouter;
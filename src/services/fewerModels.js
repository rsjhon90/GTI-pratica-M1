import CarsRepository from '../repositories/CarsRepository.js';

async function brandWithFewerModels() {
  const cars = await CarsRepository();

  const smallPortfolio = cars.filter((car) => {
    const minModel = Math.min(...cars.map(
      (car) => car.models.length));

    return car.models.length == minModel;

  });

  const smallBrand = smallPortfolio.map((car) => car.brand);

  return smallBrand;
}

export default brandWithFewerModels;
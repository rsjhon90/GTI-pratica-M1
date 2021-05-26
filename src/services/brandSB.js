import CarsRepository from '../repositories/CarsRepository.js';

export async function brandWithFewerModels() {
  const cars = await CarsRepository();

  const smallerBrand = cars
    .filter((car) => {
      const minModel = Math.min(...cars.map(
        (car) => car.models.length));

      return car.models.length == minModel;
    })
    .map((car) => car.brand);

  return smallerBrand;
}

export async function brandWithMoreModels() {
  const cars = await CarsRepository();

  const biggerBrand = cars
    .filter((car) => {
      const maxModel = Math.max(...cars.map(
        (car) => car.models.length));

      return car.models.length == maxModel;

    })
    .map((car) => car.brand);

  return biggerBrand;
}
import CarsRepository from '../repositories/CarsRepository.js';

export async function findBiggestBrands(x) {
    const cars = await CarsRepository();

    const bigBrands = cars
      .sort((car1, car2) => {
        return car2.models.length - car1.models.length;
      })
      .slice(0, x)
      .map((car) => `${car.brand} - ${car.models.length}`);

    // bigBrands.sort((car1, car2) => {
    //   if (car1.brand < car2.brand) {
    //     return -1;
    //   } else if (car1.brand < car2.brand) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }

    // });

  return bigBrands;
}

export async function findSmallerBrands(x) {
  const cars = await CarsRepository();

  const smallerBrands = cars
    .sort((car1, car2) => {
      return car1.models.length - car2.models.length;
    })
    .slice(0, x)
    .map((car) => `${car.brand} - ${car.models.length}`);

return smallerBrands;
}

export async function findBrandName(name) {
  
}
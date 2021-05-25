import CarsRepository from '../repositories/CarsRepository.js';

async function findBiggestBrands(x) {
    const cars = await CarsRepository();

    cars.sort((i1, i2) => {
      if (i1.models.length > i2.models.length) {
        return -1;
      } else if (i1.models.length < i2.models.length) {
        return 1;
      } else {
        return 0;
      }
    });

    cars.length = x;

    for (let i = 0; i < cars.length; i++) {
      console.log(cars[i]);
    }
}

export default findBiggestBrands;
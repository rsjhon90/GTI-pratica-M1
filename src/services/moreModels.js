import CarsRepository from '../repositories/CarsRepository.js';

async function brandWithMoreModels() {
  const cars = await CarsRepository();

  // const qtModels = cars
  //   .map((car) => ({ ...car }, { 
  //     total: Object.values(car.models).length }))
  //   .sort((model1, model2) => model2.total - model1.total)

  // const maxModel = Math.max(...cars.map((car) => car.models.length));

  const largPortfolio = cars.filter((car) => {
    const maxModel = Math.max(...cars.map(
      (car) => car.models.length));

    return car.models.length == maxModel;

  });

  const biggerBrand = largPortfolio.map((car) => car.brand);

  return biggerBrand;
}

export default brandWithMoreModels;

/*  
tipo, você começa criando uma propriedade para armazenar 
a quantidade de  modelos por marca
depois tu parte pro sort
ai o filter ou algo do tipo
*/

// cars.sort((i1, i2) => {
//   if (i1.models.length > i2.models.length) {
//     return -1;
//   } else if (i1.models.length < i2.models.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// const BiggestBrand = cars.find((car) => car.brand);

// return BiggestBrand;
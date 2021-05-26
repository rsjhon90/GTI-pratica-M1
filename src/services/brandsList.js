import CarsRepository from '../repositories/CarsRepository.js';

export async function findBiggestBrands(qt) {
    const cars = await CarsRepository();

    const bigBrands = cars
      .sort((car1, car2) => {
        if (car2.models.length === car1.models.length) {
          return car1.brand.localeCompare(car2.brand, 'en', 
            { ignorePunctuation: true });
        }
      
        return car2.models.length - car1.models.length;
      })
      .slice(0, qt)
      .map((car) => `${car.brand} - ${car.models.length}`);

  return bigBrands;
}

export async function findSmallerBrands(qt) {
  const cars = await CarsRepository();

  const smallerBrands = cars
    .sort((car1, car2) => {
      //Se achar modelos de tamanho igual a outro modelo ordena com localeCompare
      //de acordo a brand (a marca)
      if (car1.models.length === car2.models.length) {
        return car1.brand.localeCompare(car2.brand, 'en', 
          { ignorePunctuation: true }) //Ajuda do professor
      }

      return car1.models.length - car2.models.length;
    })
    .slice(0, qt)
    .map((car) => `${car.brand} - ${car.models.length}`);

return smallerBrands;
}

export async function findBrandName(name) {
  const cars = await CarsRepository();

  function replaceSpecialChars(str) {
    str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
    str = str.replace(/[àáâãäå]/,"a");
    str = str.replace(/[ÈÉÊË]/,"E");
    str = str.replace(/[Ç]/,"C");
    str = str.replace(/[ç]/,"c");
    str = str.replace(/[Š]/,"S");

    return str.replace(/[^a-z0-9]/gi,''); 
  }

  const modelsResult = cars
    .filter((car) => 
    replaceSpecialChars(car.brand.toUpperCase()) === name.toUpperCase())
    .map((car) => car.models);

  if (!modelsResult) {
    modelsResult = [];
  }

  return modelsResult;
}
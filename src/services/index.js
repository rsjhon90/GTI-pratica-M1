import { promises as fs } from 'fs';

import brandWithMoreModels from "./moreModels.js";
import brandWithFewerModels from "./fewerModels.js";

findBiggestBrands(5);

async function findBiggestBrands(x) {
  try {
    const cars = (JSON.parse(await fs.readFile("car-list.json")));

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

  } catch (err) {
    console.log(err)
  }
}
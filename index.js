import { promises as fs } from "fs";


brandWithMoreModels();

async function brandWithMoreModels() {
  try {
    const cars = (JSON.parse(await fs.readFile("car-list.json")));

    const models = cars
    .map((car) => car.models.length)
    .sort((i1, i2) => {
      if (i1 > i2) {
        return -1;
      } else if (i1 < i2) {
        return 1;
      } else {
        return 0;
      }
    });

    console.log(models);

  } catch (err) {
    console.log(err)
  }
}
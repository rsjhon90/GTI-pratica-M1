import { promises as fs } from "fs";

export default async function brandWithMoreModels() {
  try {
    let cars = (JSON.parse(await fs.readFile("car-list.json")));

    cars
    .sort((i1, i2) => {
      if (i1.models.length > i2.models.length) {
        return -1;
      } else if (i1.models.length < i2.models.length) {
        return 1;
      } else {
        return 0;
      }
    });

    let BiggestBrand = cars.find((car) => car.brand);

    return console.log(BiggestBrand);

  } catch (err) {
    console.log(err)
  }
}
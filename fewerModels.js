import { promises as fs } from "fs";

export default async function brandWithFewerModels() {
  try {
    let cars = (JSON.parse(await fs.readFile("car-list.json")));

    cars
    .sort((i1, i2) => {
      if (i1.models.length < i2.models.length) {
        return -1;
      } else if (i1.models.length > i2.models.length) {
        return 1;
      } else {
        return 0;
      }
    });

    let smallestBrand = cars.find((car) => car.brand);

    return console.log(smallestBrand);

  } catch (err) {
    console.log(err)
  }
}
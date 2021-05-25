import { promises as fs } from 'fs';

async function CarsRepository() { 
  try {
  const cars = (JSON.parse(await fs.readFile("./src/repositories/car-list.json")));

  return cars;
  } catch (err) {
    return console.log(err)
  }
}

export default CarsRepository;
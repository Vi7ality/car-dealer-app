import { notFound } from 'next/navigation';
import { ICars } from './utils/cars-interface';

export async function getCars() {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`
  );
  const data = await res.json();
  if (!data) notFound();
  const cars: ICars[] = data.Results;
  return cars;
}

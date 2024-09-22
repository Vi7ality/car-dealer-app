import { notFound } from 'next/navigation';

import VehicleModelList from '@/app/components/vehicle-model-list';
import { getCars, getModels } from '@/app/lib/api/car-api';
import { Params } from '@/app/lib/types/types';
import generateModelYears from '@/app/utils/generateModelYears';

export async function generateStaticParams() {
  const cars = await getCars();
  const years: string[] = generateModelYears();

  const paths = cars.flatMap(car =>
    years.map(year => ({
      makeId: car.MakeId.toString(),
      year,
    }))
  );

  return paths.map(param => ({
    params: param,
  }));
}

export default async function ResultPage({ params }: { params: Params }) {
  const { makeId, year } = params;
  const models = await getModels(makeId, year);

  if (models.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Vehicle Models</h1>
      <VehicleModelList models={models} />
    </div>
  );
}

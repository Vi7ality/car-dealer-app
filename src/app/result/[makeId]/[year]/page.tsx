import { notFound } from 'next/navigation';

import VehicleModelList from '@/app/components/vehicle-model-list';
import { getCars, getModels } from '@/lib/api/car-api';

export async function generateStaticParams() {
  const cars = await getCars();
  const years: string[] = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => (2015 + i).toString()
  );

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

const ResultPage = async ({ params }) => {
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
};

export default ResultPage;

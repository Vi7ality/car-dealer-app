'use client';
import { VehicleModel } from '@/app/lib/types/types';

interface VehicleModelListProps {
  models: VehicleModel[];
}

export default function VehicleModelList({ models }: VehicleModelListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {models.map(model => (
        <div
          key={model.Model_ID}
          className="border p-4 rounded-lg shadow-lg bg-white"
        >
          <h2 className="text-lg font-semibold">{model.Model_Name}</h2>
        </div>
      ))}
    </div>
  );
}

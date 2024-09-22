'use client';

import { getCars } from '@/lib/api/car-api';
import { ICars } from '@/lib/types/cars-interface';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import generateModelYears from '../utils/generateModelYears';

export default function VehicleSelector() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [cars, setCars] = useState<ICars[] | null>(null);
  const isNextEnabled = selectedId && selectedYear;

  const getSetCars = useCallback(async () => {
    const res = await getCars();
    setCars(res);
  }, []);

  useEffect(() => {
    getSetCars();
  }, [getSetCars]);
  const modelYears = generateModelYears();

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="makes" className="block text-lg font-medium mb-2">
          Vehicle Makes:
        </label>
        <select
          id="makes"
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Make</option>
          {cars &&
            cars.map(car => (
              <option key={car.MakeId} value={car.MakeId}>
                {car.MakeName}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="years" className="block text-lg font-medium mb-2">
          Model Year:
        </label>
        <select
          id="years"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Year</option>
          {modelYears.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <Link
        href={isNextEnabled ? `/result/${selectedId}/${selectedYear}` : '#'}
        passHref
      >
        <button
          disabled={!isNextEnabled}
          className={`w-full py-2 px-4 rounded-md text-white ${
            isNextEnabled
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          Next
        </button>
      </Link>
    </div>
  );
}

'use client';

import { getCars } from '@/lib/api/car-api';
import { ICars } from '@/lib/utils/cars-interface';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

export default function VehicleSelector() {
  // const [selectedMake, setSelectedMake] = useState('');
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

  function generateModelYears() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 2015; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  }

  return (
    <>
      <label htmlFor="makes">Vehicle makes:</label>
      <select
        id="makes"
        value={selectedId}
        onChange={e => setSelectedId(e.target.value)}
      >
        <option value="">Select Make</option>
        {cars !== null &&
          cars.map(car => (
            <option key={car.MakeId} value={car.MakeId}>
              {car.MakeName}
            </option>
          ))}
      </select>

      <label htmlFor="years">Model Year: </label>
      <select
        id="years"
        value={selectedYear}
        onChange={e => setSelectedYear(e.target.value)}
      >
        <option value="">Select Year</option>
        {modelYears.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <Link
        href={isNextEnabled ? `/result/${selectedId}/${selectedYear}` : '#'}
        passHref
      >
        <button disabled={!isNextEnabled} style={{ marginTop: '20px' }}>
          Next
        </button>
      </Link>
    </>
  );
}

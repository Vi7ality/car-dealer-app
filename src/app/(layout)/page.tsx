import { Suspense } from 'react';
import ModelSelector from '../components/vehicle-selector';
import Loader from '../components/loader';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ModelSelector />
      </Suspense>
    </>
  );
}

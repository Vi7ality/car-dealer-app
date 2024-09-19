// import Footer from '../components/footer';
import { Suspense } from 'react';
import Header from '../components/header';
import Loader from '../components/loader';

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-[url('/assets/img/cinema_seats.jpg')] bg-gray-950 bg-cover bg-bottom min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
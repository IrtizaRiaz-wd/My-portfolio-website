import Head from 'next/head';
import { VelocityRentalsNav, VelocityRentalsFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function BookingPage() {
  return (
    <>
      <Head>
        <title>Booking - Velocity Rentals</title>
        <meta name="description" content="Booking page - coming soon on the Velocity Rentals demo website." />
      </Head>

      <VelocityRentalsNav />

      <main className="flex-1">
        <ComingSoon
          site="Velocity Rentals"
          home="/velocity-rentals"
          page="Booking"
          theme="velocity"
        />
      </main>

      <VelocityRentalsFooter />
    </>
  );
}

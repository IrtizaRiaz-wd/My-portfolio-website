import Head from 'next/head';
import { VelocityRentalsNav, VelocityRentalsFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function VehiclesPage() {
  return (
    <>
      <Head>
        <title>Vehicles - Velocity Rentals</title>
        <meta name="description" content="Vehicles page - coming soon on the Velocity Rentals demo website." />
      </Head>

      <VelocityRentalsNav />

      <main className="flex-1">
        <ComingSoon
          site="Velocity Rentals"
          home="/velocity-rentals"
          page="Vehicles"
          theme="velocity"
        />
      </main>

      <VelocityRentalsFooter />
    </>
  );
}

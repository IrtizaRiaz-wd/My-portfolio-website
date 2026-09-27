import Head from 'next/head';
import { VelocityRentalsNav, VelocityRentalsFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing - Velocity Rentals</title>
        <meta name="description" content="Pricing page - coming soon on the Velocity Rentals demo website." />
      </Head>

      <VelocityRentalsNav />

      <main className="flex-1">
        <ComingSoon
          site="Velocity Rentals"
          home="/velocity-rentals"
          page="Pricing"
          theme="velocity"
        />
      </main>

      <VelocityRentalsFooter />
    </>
  );
}

import Head from 'next/head';
import { VelocityRentalsNav, VelocityRentalsFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function AccountPage() {
  return (
    <>
      <Head>
        <title>Account - Velocity Rentals</title>
        <meta name="description" content="Account page - coming soon on the Velocity Rentals demo website." />
      </Head>

      <VelocityRentalsNav />

      <main className="flex-1">
        <ComingSoon
          site="Velocity Rentals"
          home="/velocity-rentals"
          page="Account"
          theme="velocity"
        />
      </main>

      <VelocityRentalsFooter />
    </>
  );
}

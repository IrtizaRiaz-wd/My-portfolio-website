import Head from 'next/head';
import { VelocityRentalsNav, VelocityRentalsFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign Up - Velocity Rentals</title>
        <meta name="description" content="Sign Up page - coming soon on the Velocity Rentals demo website." />
      </Head>

      <VelocityRentalsNav />

      <main className="flex-1">
        <ComingSoon
          site="Velocity Rentals"
          home="/velocity-rentals"
          page="Sign Up"
          theme="velocity"
        />
      </main>

      <VelocityRentalsFooter />
    </>
  );
}

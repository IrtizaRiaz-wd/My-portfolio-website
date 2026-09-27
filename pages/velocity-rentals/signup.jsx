import Head from 'next/head';
import { VelocityRentalsNav, VelocityRentalsFooter } from '../../components/AllRemainingNavFooter';
import AuthForm from '../../components/AuthForm';

export default function VelocityRentalsSignUp() {
  return (
    <>
      <Head>
        <title>Sign Up - Velocity Rentals</title>
        <meta name="description" content="Sign Up to your Velocity Rentals demo account." />
      </Head>

      <VelocityRentalsNav />

      <main className="flex-1">
        <AuthForm mode="signup" theme="velocity" site="Velocity Rentals" home="/velocity-rentals" />
      </main>

      <VelocityRentalsFooter />
    </>
  );
}

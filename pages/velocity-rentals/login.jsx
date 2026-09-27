import Head from 'next/head';
import { VelocityRentalsNav, VelocityRentalsFooter } from '../../components/AllRemainingNavFooter';
import AuthForm from '../../components/AuthForm';

export default function VelocityRentalsLogin() {
  return (
    <>
      <Head>
        <title>Login - Velocity Rentals</title>
        <meta name="description" content="Login to your Velocity Rentals demo account." />
      </Head>

      <VelocityRentalsNav />

      <main className="flex-1">
        <AuthForm mode="login" theme="velocity" site="Velocity Rentals" home="/velocity-rentals" />
      </main>

      <VelocityRentalsFooter />
    </>
  );
}

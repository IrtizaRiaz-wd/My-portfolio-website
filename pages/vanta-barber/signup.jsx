import Head from 'next/head';
import VantaBarberNav from '../../components/VantaBarberNav';
import VantaBarberFooter from '../../components/VantaBarberFooter';
import AuthForm from '../../components/AuthForm';

export default function VantaBarberSignUp() {
  return (
    <>
      <Head>
        <title>Sign Up - Vanta Barber</title>
        <meta name="description" content="Sign Up to your Vanta Barber demo account." />
      </Head>

      <VantaBarberNav />

      <main className="flex-1">
        <AuthForm mode="signup" theme="vanta" site="Vanta Barber" home="/vanta-barber" />
      </main>

      <VantaBarberFooter />
    </>
  );
}

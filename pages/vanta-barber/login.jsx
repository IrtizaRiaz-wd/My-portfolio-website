import Head from 'next/head';
import VantaBarberNav from '../../components/VantaBarberNav';
import VantaBarberFooter from '../../components/VantaBarberFooter';
import AuthForm from '../../components/AuthForm';

export default function VantaBarberLogin() {
  return (
    <>
      <Head>
        <title>Login - Vanta Barber</title>
        <meta name="description" content="Login to your Vanta Barber demo account." />
      </Head>

      <VantaBarberNav />

      <main className="flex-1">
        <AuthForm mode="login" theme="vanta" site="Vanta Barber" home="/vanta-barber" />
      </main>

      <VantaBarberFooter />
    </>
  );
}

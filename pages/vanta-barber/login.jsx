import Head from 'next/head';
import VantaBarberNav from '../../components/VantaBarberNav';
import VantaBarberFooter from '../../components/VantaBarberFooter';
import ComingSoon from '../../components/ComingSoon';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Vanta Barber</title>
        <meta name="description" content="Login page - coming soon on the Vanta Barber demo website." />
      </Head>

      <VantaBarberNav />

      <main className="flex-1">
        <ComingSoon
          site="Vanta Barber"
          home="/vanta-barber"
          page="Login"
          theme="vanta"
        />
      </main>

      <VantaBarberFooter />
    </>
  );
}

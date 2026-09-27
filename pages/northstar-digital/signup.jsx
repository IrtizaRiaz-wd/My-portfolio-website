import Head from 'next/head';
import { NorthstarDigitalNav, NorthstarDigitalFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign Up - Northstar Digital</title>
        <meta name="description" content="Sign Up page - coming soon on the Northstar Digital demo website." />
      </Head>

      <NorthstarDigitalNav />

      <main className="flex-1">
        <ComingSoon
          site="Northstar Digital"
          home="/northstar-digital"
          page="Sign Up"
          theme="northstar"
        />
      </main>

      <NorthstarDigitalFooter />
    </>
  );
}

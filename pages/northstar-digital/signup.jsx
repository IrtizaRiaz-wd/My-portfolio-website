import Head from 'next/head';
import { NorthstarDigitalNav, NorthstarDigitalFooter } from '../../components/AllRemainingNavFooter';
import AuthForm from '../../components/AuthForm';

export default function NorthstarDigitalSignUp() {
  return (
    <>
      <Head>
        <title>Sign Up - Northstar Digital</title>
        <meta name="description" content="Sign Up to your Northstar Digital demo account." />
      </Head>

      <NorthstarDigitalNav />

      <main className="flex-1">
        <AuthForm mode="signup" theme="northstar" site="Northstar Digital" home="/northstar-digital" />
      </main>

      <NorthstarDigitalFooter />
    </>
  );
}

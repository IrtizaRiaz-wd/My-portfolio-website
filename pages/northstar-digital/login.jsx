import Head from 'next/head';
import { NorthstarDigitalNav, NorthstarDigitalFooter } from '../../components/AllRemainingNavFooter';
import AuthForm from '../../components/AuthForm';

export default function NorthstarDigitalLogin() {
  return (
    <>
      <Head>
        <title>Login - Northstar Digital</title>
        <meta name="description" content="Login to your Northstar Digital demo account." />
      </Head>

      <NorthstarDigitalNav />

      <main className="flex-1">
        <AuthForm mode="login" theme="northstar" site="Northstar Digital" home="/northstar-digital" />
      </main>

      <NorthstarDigitalFooter />
    </>
  );
}

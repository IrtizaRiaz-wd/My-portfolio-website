import Head from 'next/head';
import { NorthlineEstatesNav, NorthlineEstatesFooter } from '../../components/AllRemainingNavFooter';
import AuthForm from '../../components/AuthForm';

export default function NorthlineEstatesLogin() {
  return (
    <>
      <Head>
        <title>Login - Northline Estates</title>
        <meta name="description" content="Login to your Northline Estates demo account." />
      </Head>

      <NorthlineEstatesNav />

      <main className="flex-1">
        <AuthForm mode="login" theme="northline" site="Northline Estates" home="/northline-estates" />
      </main>

      <NorthlineEstatesFooter />
    </>
  );
}

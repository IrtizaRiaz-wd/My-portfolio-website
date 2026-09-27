import Head from 'next/head';
import { NorthlineEstatesNav, NorthlineEstatesFooter } from '../../components/AllRemainingNavFooter';
import AuthForm from '../../components/AuthForm';

export default function NorthlineEstatesSignUp() {
  return (
    <>
      <Head>
        <title>Sign Up - Northline Estates</title>
        <meta name="description" content="Sign Up to your Northline Estates demo account." />
      </Head>

      <NorthlineEstatesNav />

      <main className="flex-1">
        <AuthForm mode="signup" theme="northline" site="Northline Estates" home="/northline-estates" />
      </main>

      <NorthlineEstatesFooter />
    </>
  );
}

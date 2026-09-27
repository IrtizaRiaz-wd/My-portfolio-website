import Head from 'next/head';
import { IronDistrictNav, IronDistrictFooter } from '../../components/AllRemainingNavFooter';
import AuthForm from '../../components/AuthForm';

export default function IronDistrictSignUp() {
  return (
    <>
      <Head>
        <title>Sign Up - Iron District</title>
        <meta name="description" content="Sign Up to your Iron District demo account." />
      </Head>

      <IronDistrictNav />

      <main className="flex-1">
        <AuthForm mode="signup" theme="iron" site="Iron District" home="/iron-district" />
      </main>

      <IronDistrictFooter />
    </>
  );
}

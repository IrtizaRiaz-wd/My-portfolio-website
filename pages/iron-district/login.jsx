import Head from 'next/head';
import { IronDistrictNav, IronDistrictFooter } from '../../components/AllRemainingNavFooter';
import AuthForm from '../../components/AuthForm';

export default function IronDistrictLogin() {
  return (
    <>
      <Head>
        <title>Login - Iron District</title>
        <meta name="description" content="Login to your Iron District demo account." />
      </Head>

      <IronDistrictNav />

      <main className="flex-1">
        <AuthForm mode="login" theme="iron" site="Iron District" home="/iron-district" />
      </main>

      <IronDistrictFooter />
    </>
  );
}

import Head from 'next/head';
import { IronDistrictNav, IronDistrictFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Iron District</title>
        <meta name="description" content="Login page - coming soon on the Iron District demo website." />
      </Head>

      <IronDistrictNav />

      <main className="flex-1">
        <ComingSoon
          site="Iron District"
          home="/iron-district"
          page="Login"
          theme="iron"
        />
      </main>

      <IronDistrictFooter />
    </>
  );
}

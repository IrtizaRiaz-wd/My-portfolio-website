import Head from 'next/head';
import { IronDistrictNav, IronDistrictFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign Up - Iron District</title>
        <meta name="description" content="Sign Up page - coming soon on the Iron District demo website." />
      </Head>

      <IronDistrictNav />

      <main className="flex-1">
        <ComingSoon
          site="Iron District"
          home="/iron-district"
          page="Sign Up"
          theme="iron"
        />
      </main>

      <IronDistrictFooter />
    </>
  );
}

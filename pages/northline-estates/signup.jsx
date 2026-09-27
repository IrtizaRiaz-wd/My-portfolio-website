import Head from 'next/head';
import { NorthlineEstatesNav, NorthlineEstatesFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign Up - Northline Estates</title>
        <meta name="description" content="Sign Up page - coming soon on the Northline Estates demo website." />
      </Head>

      <NorthlineEstatesNav />

      <main className="flex-1">
        <ComingSoon
          site="Northline Estates"
          home="/northline-estates"
          page="Sign Up"
          theme="northline"
        />
      </main>

      <NorthlineEstatesFooter />
    </>
  );
}

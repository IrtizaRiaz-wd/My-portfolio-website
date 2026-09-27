import Head from 'next/head';
import { NorthlineEstatesNav, NorthlineEstatesFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Northline Estates</title>
        <meta name="description" content="Login page - coming soon on the Northline Estates demo website." />
      </Head>

      <NorthlineEstatesNav />

      <main className="flex-1">
        <ComingSoon
          site="Northline Estates"
          home="/northline-estates"
          page="Login"
          theme="northline"
        />
      </main>

      <NorthlineEstatesFooter />
    </>
  );
}

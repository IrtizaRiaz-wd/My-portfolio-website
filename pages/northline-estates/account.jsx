import Head from 'next/head';
import { NorthlineEstatesNav, NorthlineEstatesFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function AccountPage() {
  return (
    <>
      <Head>
        <title>Account - Northline Estates</title>
        <meta name="description" content="Account page - coming soon on the Northline Estates demo website." />
      </Head>

      <NorthlineEstatesNav />

      <main className="flex-1">
        <ComingSoon
          site="Northline Estates"
          home="/northline-estates"
          page="Account"
          theme="northline"
        />
      </main>

      <NorthlineEstatesFooter />
    </>
  );
}

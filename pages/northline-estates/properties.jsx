import Head from 'next/head';
import { NorthlineEstatesNav, NorthlineEstatesFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function PropertiesPage() {
  return (
    <>
      <Head>
        <title>Properties - Northline Estates</title>
        <meta name="description" content="Properties page - coming soon on the Northline Estates demo website." />
      </Head>

      <NorthlineEstatesNav />

      <main className="flex-1">
        <ComingSoon
          site="Northline Estates"
          home="/northline-estates"
          page="Properties"
          theme="northline"
        />
      </main>

      <NorthlineEstatesFooter />
    </>
  );
}

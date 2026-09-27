import Head from 'next/head';
import { NorthlineEstatesNav, NorthlineEstatesFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Northline Estates</title>
        <meta name="description" content="Contact page - coming soon on the Northline Estates demo website." />
      </Head>

      <NorthlineEstatesNav />

      <main className="flex-1">
        <ComingSoon
          site="Northline Estates"
          home="/northline-estates"
          page="Contact"
          theme="northline"
        />
      </main>

      <NorthlineEstatesFooter />
    </>
  );
}

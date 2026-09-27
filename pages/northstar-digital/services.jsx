import Head from 'next/head';
import { NorthstarDigitalNav, NorthstarDigitalFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services - Northstar Digital</title>
        <meta name="description" content="Services page - coming soon on the Northstar Digital demo website." />
      </Head>

      <NorthstarDigitalNav />

      <main className="flex-1">
        <ComingSoon
          site="Northstar Digital"
          home="/northstar-digital"
          page="Services"
          theme="northstar"
        />
      </main>

      <NorthstarDigitalFooter />
    </>
  );
}

import Head from 'next/head';
import { NorthstarDigitalNav, NorthstarDigitalFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Our Work - Northstar Digital</title>
        <meta name="description" content="Our Work page - coming soon on the Northstar Digital demo website." />
      </Head>

      <NorthstarDigitalNav />

      <main className="flex-1">
        <ComingSoon
          site="Northstar Digital"
          home="/northstar-digital"
          page="Our Work"
          theme="northstar"
        />
      </main>

      <NorthstarDigitalFooter />
    </>
  );
}

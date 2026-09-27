import Head from 'next/head';
import { NorthstarDigitalNav, NorthstarDigitalFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function AccountPage() {
  return (
    <>
      <Head>
        <title>Account - Northstar Digital</title>
        <meta name="description" content="Account page - coming soon on the Northstar Digital demo website." />
      </Head>

      <NorthstarDigitalNav />

      <main className="flex-1">
        <ComingSoon
          site="Northstar Digital"
          home="/northstar-digital"
          page="Account"
          theme="northstar"
        />
      </main>

      <NorthstarDigitalFooter />
    </>
  );
}

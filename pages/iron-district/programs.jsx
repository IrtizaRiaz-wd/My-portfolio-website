import Head from 'next/head';
import { IronDistrictNav, IronDistrictFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function ProgramsPage() {
  return (
    <>
      <Head>
        <title>Programs - Iron District</title>
        <meta name="description" content="Programs page - coming soon on the Iron District demo website." />
      </Head>

      <IronDistrictNav />

      <main className="flex-1">
        <ComingSoon
          site="Iron District"
          home="/iron-district"
          page="Programs"
          theme="iron"
        />
      </main>

      <IronDistrictFooter />
    </>
  );
}

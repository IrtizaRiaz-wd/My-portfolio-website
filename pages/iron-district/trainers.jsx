import Head from 'next/head';
import { IronDistrictNav, IronDistrictFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function TrainersPage() {
  return (
    <>
      <Head>
        <title>Trainers - Iron District</title>
        <meta name="description" content="Trainers page - coming soon on the Iron District demo website." />
      </Head>

      <IronDistrictNav />

      <main className="flex-1">
        <ComingSoon
          site="Iron District"
          home="/iron-district"
          page="Trainers"
          theme="iron"
        />
      </main>

      <IronDistrictFooter />
    </>
  );
}

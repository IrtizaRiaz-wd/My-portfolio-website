import Head from 'next/head';
import { NorthlineEstatesNav, NorthlineEstatesFooter } from '../../components/AllRemainingNavFooter';
import ComingSoon from '../../components/ComingSoon';

export default function AgentsPage() {
  return (
    <>
      <Head>
        <title>Agents - Northline Estates</title>
        <meta name="description" content="Agents page - coming soon on the Northline Estates demo website." />
      </Head>

      <NorthlineEstatesNav />

      <main className="flex-1">
        <ComingSoon
          site="Northline Estates"
          home="/northline-estates"
          page="Agents"
          theme="northline"
        />
      </main>

      <NorthlineEstatesFooter />
    </>
  );
}

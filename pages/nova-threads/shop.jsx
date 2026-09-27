import Head from 'next/head';
import NovaThreadsNav from '../../components/NovaThreadsNav';
import NovaThreadsFooter from '../../components/NovaThreadsFooter';
import ComingSoon from '../../components/ComingSoon';

export default function ShopPage() {
  return (
    <>
      <Head>
        <title>Shop - Nova Threads</title>
        <meta name="description" content="Shop page - coming soon on the Nova Threads demo website." />
      </Head>

      <NovaThreadsNav />

      <main className="flex-1">
        <ComingSoon
          site="Nova Threads"
          home="/nova-threads"
          page="Shop"
          theme="nova"
        />
      </main>

      <NovaThreadsFooter />
    </>
  );
}

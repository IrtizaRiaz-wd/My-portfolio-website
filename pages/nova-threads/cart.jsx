import Head from 'next/head';
import NovaThreadsNav from '../../components/NovaThreadsNav';
import NovaThreadsFooter from '../../components/NovaThreadsFooter';
import ComingSoon from '../../components/ComingSoon';

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Cart - Nova Threads</title>
        <meta name="description" content="Cart page - coming soon on the Nova Threads demo website." />
      </Head>

      <NovaThreadsNav />

      <main className="flex-1">
        <ComingSoon
          site="Nova Threads"
          home="/nova-threads"
          page="Cart"
          theme="nova"
        />
      </main>

      <NovaThreadsFooter />
    </>
  );
}

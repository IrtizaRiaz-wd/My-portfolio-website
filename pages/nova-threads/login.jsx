import Head from 'next/head';
import NovaThreadsNav from '../../components/NovaThreadsNav';
import NovaThreadsFooter from '../../components/NovaThreadsFooter';
import ComingSoon from '../../components/ComingSoon';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Nova Threads</title>
        <meta name="description" content="Login page - coming soon on the Nova Threads demo website." />
      </Head>

      <NovaThreadsNav />

      <main className="flex-1">
        <ComingSoon
          site="Nova Threads"
          home="/nova-threads"
          page="Login"
          theme="nova"
        />
      </main>

      <NovaThreadsFooter />
    </>
  );
}

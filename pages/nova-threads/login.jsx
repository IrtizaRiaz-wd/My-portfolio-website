import Head from 'next/head';
import NovaThreadsNav from '../../components/NovaThreadsNav';
import NovaThreadsFooter from '../../components/NovaThreadsFooter';
import AuthForm from '../../components/AuthForm';

export default function NovaThreadsLogin() {
  return (
    <>
      <Head>
        <title>Login - Nova Threads</title>
        <meta name="description" content="Login to your Nova Threads demo account." />
      </Head>

      <NovaThreadsNav />

      <main className="flex-1">
        <AuthForm mode="login" theme="nova" site="Nova Threads" home="/nova-threads" />
      </main>

      <NovaThreadsFooter />
    </>
  );
}

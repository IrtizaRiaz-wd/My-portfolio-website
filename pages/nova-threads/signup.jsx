import Head from 'next/head';
import NovaThreadsNav from '../../components/NovaThreadsNav';
import NovaThreadsFooter from '../../components/NovaThreadsFooter';
import AuthForm from '../../components/AuthForm';

export default function NovaThreadsSignUp() {
  return (
    <>
      <Head>
        <title>Sign Up - Nova Threads</title>
        <meta name="description" content="Sign Up to your Nova Threads demo account." />
      </Head>

      <NovaThreadsNav />

      <main className="flex-1">
        <AuthForm mode="signup" theme="nova" site="Nova Threads" home="/nova-threads" />
      </main>

      <NovaThreadsFooter />
    </>
  );
}

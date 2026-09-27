import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Handle scroll to top on page changes
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

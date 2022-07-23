import '../styles/reset.css';
import '../styles/main.css';
import { useRouter } from 'next/router';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

import type { AppProps } from 'next/app';
import 'chrollo-ui/dist/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

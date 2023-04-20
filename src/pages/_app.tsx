import Header from "ihealth/components/Header";
import Footer from "ihealth/components/Footer";
import "ihealth/styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "ihealth/context/auth/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

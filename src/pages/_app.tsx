import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from '../context/ToastContext';
import { AuthProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ToastProvider>
  );
}

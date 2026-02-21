import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from '../context/ToastContext';
import { AuthProvider } from '../context/AuthContext';
import { LoadingProvider, useLoading } from '../context/LoadingContext';
import Loader from '../components/Loader';
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { analytics, logEvent } from "../lib/firebase";

function AppContent({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      showLoader();
    };

    const handleComplete = (url: string) => {
      NProgress.done();
      hideLoader();

      // Log page view to Firebase Analytics
      if (analytics) {
        logEvent(analytics, 'page_view', {
          page_path: url,
          page_title: document.title,
          page_location: window.location.href,
          url: window.location.href
        });
      }
    };

    const handleError = () => {
      NProgress.done();
      hideLoader();
    };

    // Log initial page view
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path: router.asPath,
        page_title: document.title,
        page_location: window.location.href,
        url: window.location.href
      });
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router, showLoader, hideLoader]);

  return (
    <>
      <Loader />
      <Component {...pageProps} />
    </>
  );
}

export default function App(props: AppProps) {
  return (
    <ToastProvider>
      <AuthProvider>
        <LoadingProvider>
          <AppContent {...props} />
        </LoadingProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

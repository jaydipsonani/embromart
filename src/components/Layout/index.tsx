import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
    children: ReactNode;
    title?: string;
    hideFooter?: boolean;
}

export default function Layout({
    children,
    title = 'EmbroMart - Embroidery Design Marketplace',
    hideFooter = false
}: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Premium embroidery designs for your machine" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
                <Header />
                <main style={{ flex: 1, width: '100%', overflowX: 'hidden' }}>
                    {children}
                </main>
                {!hideFooter && <Footer />}
            </div>
        </>
    );
}

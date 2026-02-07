import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import Button from '../Button';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
    const router = useRouter();
    const { user, logout } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === '/') {
            return router.pathname === '/' ? styles.active : '';
        }
        return router.pathname.startsWith(path) ? styles.active : '';
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        const handleRouteChange = () => {
            setIsMobileMenuOpen(false);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <button 
                            className={styles.mobileMenuButton}
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <span className={styles.hamburger}>
                                <span className={isMobileMenuOpen ? styles.active : ''}></span>
                                <span className={isMobileMenuOpen ? styles.active : ''}></span>
                                <span className={isMobileMenuOpen ? styles.active : ''}></span>
                            </span>
                        </button>
                        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
                            Embro<span>Mart</span>
                        </Link>
                    </div>

                    <nav className={styles.nav}>
                        <Link href="/" className={isActive('/')}>Home</Link>
                        <Link href="/browse" className={isActive('/browse')}>Browse Designs</Link>
                        <Link href="/my-designs" className={isActive('/my-designs')}>My Designs</Link>
                        <Link href="/blog" className={isActive('/blog')}>Blog</Link>
                        <Link href="/contact" className={isActive('/contact')}>Contact</Link>
                    </nav>

                    <div className={styles.actions}>
                        {user ? (
                            <div className={styles.userMenu}>
                                <span className={styles.userName}>Hi, {user.name.split(' ')[0]}</span>
                                <button onClick={logout} className={styles.logoutBtn}>Sign Out</button>
                            </div>
                        ) : (
                            <Link href="/auth/signin">
                                <Button variant="primary" size="medium">Sign In</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div 
                className={`${styles.mobileSidebar} ${isMobileMenuOpen ? styles.open : ''}`}
                onClick={closeMobileMenu}
            >
                <div className={styles.sidebarContent} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.sidebarHeader}>
                        <h2>Menu</h2>
                        <button 
                            className={styles.closeButton}
                            onClick={closeMobileMenu}
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                    </div>
                    <nav className={styles.mobileNav}>
                        <Link href="/" className={isActive('/')} onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link href="/browse" className={isActive('/browse')} onClick={closeMobileMenu}>
                            Browse Designs
                        </Link>
                        <Link href="/my-designs" className={isActive('/my-designs')} onClick={closeMobileMenu}>
                            My Designs
                        </Link>
                        <Link href="/blog" className={isActive('/blog')} onClick={closeMobileMenu}>
                            Blog
                        </Link>
                        <Link href="/contact" className={isActive('/contact')} onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </nav>
                    <div className={styles.sidebarFooter}>
                        {user ? (
                            <div className={styles.mobileUserMenu}>
                                <p className={styles.mobileUserName}>Hi, {user.name.split(' ')[0]}</p>
                                <Button variant="secondary" onClick={() => { logout(); closeMobileMenu(); }} style={{ width: '100%' }}>
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <Link href="/auth/signin" onClick={closeMobileMenu}>
                                <Button variant="primary" size="large" style={{ width: '100%' }}>
                                    Sign In
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className={styles.overlay}
                    onClick={closeMobileMenu}
                />
            )}
        </>
    );
}

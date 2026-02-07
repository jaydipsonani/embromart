import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import Button from '../Button';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
    const router = useRouter();
    const { user, logout } = useAuth();

    const isActive = (path: string) => router.pathname === path ? styles.active : '';

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Embro<span>Mart</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={isActive('/')}>Home</Link>
                    <Link href="/browse" className={isActive('/browse')}>Browse Designs</Link>
                    <Link href="/blog" className={isActive('/blog')}>Blog</Link>
                    <Link href="/contact" className={isActive('/contact')}>Contact</Link>
                </nav>

                <div className={styles.actions}>
                    <div className={styles.cart}>
                        <span>🛒</span>
                        <span className={styles.badge}>0</span>
                    </div>

                    {user ? (
                        <div className={styles.userMenu}>
                            <span className={styles.userName}>Hi, {user.name.split(' ')[0]}</span>
                            <button onClick={logout} className={styles.logoutBtn}>Sign Out</button>
                        </div>
                    ) : (
                        <Link href="/auth/signin">
                            <Button variant="primary" size="small">Sign In</Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}

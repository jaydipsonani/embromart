import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>EmbroMart</h3>
                    <p>
                        Your premium marketplace for high-quality embroidery designs.
                        Compatible with all major machine formats.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <Link href="/browse">Browse Designs</Link>
                    <Link href="/blog">Blog & Tips</Link>
                    <Link href="/contact">Contact Support</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>

                <div className={styles.column}>
                    <h3>Connect</h3>
                    <a href="#">Instagram</a>
                    <a href="#">Pinterest</a>
                    <a href="#">Facebook</a>
                    <a href="#">YouTube</a>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} EmbroMart. All rights reserved.</p>
            </div>
        </footer>
    );
}

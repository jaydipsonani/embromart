import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.newsletter}>
                <div className={styles.container}>
                    <div className={styles.newsletterContent}>
                        <h3>Join Our Community</h3>
                        <p>Get exclusive free designs, tutorials, and discounts delivered to your inbox.</p>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.linksGrid}>
                    <div className={styles.column}>
                        <h3>EmbroMart</h3>
                        <p>
                            Your premium marketplace for high-quality embroidery designs.
                            Compatible with all major machine formats including Brother, Janome, and Bernina.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3>Discover</h3>
                        <Link href="/browse">Browse Designs</Link>
                        <Link href="/browse?filter=new">New Arrivals</Link>
                        <Link href="/blog">Blog & Tips</Link>
                        <Link href="/contact">Contact Support</Link>
                    </div>

                    <div className={styles.column}>
                        <h3>Legal</h3>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/licenses">Licensing</Link>
                    </div>

                    <div className={styles.column}>
                        <h3>Connect</h3>
                        <div className={styles.social}>
                            <a href="#">Instagram</a>
                            <a href="#">Pinterest</a>
                            <a href="#">Facebook</a>
                            <a href="#">YouTube</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} EmbroMart. All rights reserved.</p>
            </div>
        </footer>
    );
}

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import styles from './Downloads.module.scss';
import { designs } from '../../data/designs';

export default function Downloads() {
    const purchasedDesign = designs[0]; // Mock

    return (
        <Layout title="Your Downloads - EmbroMart">
            <div className={styles.container}>
                <div className={styles.successHeader}>
                    <div className={styles.icon}>✅</div>
                    <h1>Thank you for your purchase!</h1>
                    <p>Your files are ready to download.</p>
                </div>

                <div className={styles.downloadCard}>
                    <img src={purchasedDesign.imageUrl} alt={purchasedDesign.title} />
                    <div className={styles.info}>
                        <h2>{purchasedDesign.title}</h2>
                        <p>Formats included: {purchasedDesign.formats.join(', ')}</p>
                        <div className={styles.actions}>
                            <Button onClick={() => window.open('#', '_blank')}>Download .ZIP (All formats)</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

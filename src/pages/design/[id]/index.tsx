import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import CompatibilityChecker from '../../../components/CompatibilityChecker';
import { designs } from '../../../data/designs';
import styles from '../DesignDetails.module.scss';
import Head from 'next/head';

export default function DesignDetail() {
    const router = useRouter();
    const { id } = router.query;

    const design = designs.find(d => d.id === id);

    if (!design) {
        return <Layout><div style={{ padding: '50px', textAlign: 'center' }}>Design not found.</div></Layout>;
    }

    return (
        <Layout title={`${design.title} - EmbroMart`}>
            <div className={styles.detailContainer}>
                <div className={styles.imageGallery}>
                    <div className={styles.mainImage}>
                        <img src={design.imageUrl} alt={design.title} />
                    </div>
                </div>

                <div className={styles.info}>
                    <h1>{design.title}</h1>
                    <p className={styles.price}>₹{design.price}</p>

                    <div className={styles.meta}>
                        <span>★ {design.rating} Rating</span>
                        <span>{design.category}</span>
                    </div>

                    <p className={styles.description}>{design.description}</p>

                    <div className={styles.detailsGrid}>
                        <div><strong>Stitch Count</strong> {design.stitchCount.toLocaleString()}</div>
                        <div><strong>Colors</strong> {design.colors}</div>
                        <div><strong>Hoop Size</strong> {design.hoopSize}</div>
                        <div><strong>Formats</strong> {design.formats.join(', ')}</div>
                    </div>

                    <CompatibilityChecker supportedFormats={design.formats} />

                    <Button size="large" onClick={() => router.push(`/checkout?id=${design.id}`)}>
                        Buy Now - ₹{design.price.toFixed(2)}
                    </Button>
                </div>
            </div>
        </Layout>
    );
}

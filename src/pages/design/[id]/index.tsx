import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import CompatibilityChecker from '../../../components/CompatibilityChecker';
import { designs } from '../../../data/designs';
import styles from '../DesignDetails.module.scss';
import DesignCard from '../../../components/DesignCard';

export default function DesignDetail() {
    const router = useRouter();
    const { id } = router.query;

    const design = designs.find(d => d.id === id);

    // Filter related designs: same category, exclude current design, limit to 4
    const relatedDesigns = designs
        .filter(d => d.category === design?.category && d.id !== design?.id)
        .slice(0, 4);

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    if (!design) {
        return <Layout><div style={{ padding: '50px', textAlign: 'center' }}>Design not found.</div></Layout>;
    }

    return (
        <Layout title={`${design.title} - EmbroMart`}>
            <div className={styles.detailContainer}>
                <div className={styles.imageGallery}>
                    <div className={styles.mainImage} onClick={() => setIsLightboxOpen(true)}>
                        <img src={design.imageUrl} alt={design.title} />
                        <div className={styles.zoomHint}>🔍 Click to zoom</div>
                    </div>
                </div>

                {isLightboxOpen && (
                    <div className={styles.lightbox} onClick={() => setIsLightboxOpen(false)}>
                        <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.closeBtn} onClick={() => setIsLightboxOpen(false)}>×</button>
                            <img src={design.imageUrl} alt={design.title} />
                        </div>
                    </div>
                )}

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

            {/* {relatedDesigns.length > 0 && (
                <div className={styles.relatedSection}>
                    <h2>Related Designs</h2>
                    <div className={styles.grid}>
                        {relatedDesigns.map(d => (
                            <DesignCard key={d.id} design={d} />
                        ))}
                    </div>
                </div>
            )} */}
        </Layout>
    );
}

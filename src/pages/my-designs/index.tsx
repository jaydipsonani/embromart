import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { Design } from '../../data/designs';
import styles from './MyDesigns.module.scss';

export default function MyDesigns() {
    const router = useRouter();
    const [purchasedDesigns, setPurchasedDesigns] = useState<Design[]>([]);

    useEffect(() => {
        // Load purchased designs from localStorage
        const stored = localStorage.getItem('purchasedDesigns');
        if (stored) {
            try {
                setPurchasedDesigns(JSON.parse(stored));
            } catch (e) {
                console.error('Error loading purchased designs:', e);
            }
        }
    }, []);

    const handleDownload = (design: Design) => {
        const link = document.createElement('a');
        link.href = design.imageUrl;
        link.download = `${design.title.replace(/\s+/g, '-')}.zip`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (purchasedDesigns.length === 0) {
        return (
            <Layout title="My Designs - EmbroMart">
                <div className={styles.container}>
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon}>📦</div>
                        <h1>No Designs Yet</h1>
                        <p>You haven't purchased any designs yet. Start browsing our collection!</p>
                        <Button onClick={() => router.push('/gallery')} size="large">
                            Browse Designs
                        </Button>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="My Designs - EmbroMart">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>My Designs</h1>
                    <p>Your purchased embroidery designs</p>
                </div>

                <div className={styles.grid}>
                    {purchasedDesigns.map((design) => (
                        <div key={design.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={design.imageUrl} alt={design.title} />
                            </div>
                            <div className={styles.content}>
                                <h3>{design.title}</h3>
                                <div className={styles.meta}>
                                    <span>{design.category}</span>
                                    <span>•</span>
                                    <span>{design.hoopSize}</span>
                                </div>
                                <div className={styles.formats}>
                                    <strong>Formats:</strong> {design.formats.join(', ')}
                                </div>
                                <div className={styles.actions}>
                                    <Button
                                        onClick={() => handleDownload(design)}
                                        variant="primary"
                                        size="medium"
                                    >
                                        Download
                                    </Button>
                                    <Button
                                        onClick={() => router.push(`/design/${design.id}`)}
                                        variant="secondary"
                                        size="medium"
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}


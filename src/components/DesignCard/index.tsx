import Link from 'next/link';
import Image from 'next/image';
import styles from './DesignCard.module.scss';
import { Design } from '../../data/designs';

interface DesignCardProps {
    design: Design;
}

export default function DesignCard({ design }: DesignCardProps) {
    return (
        <Link href={`/design/${design.id}`} className={styles.card}>
            <div className={styles.imageContainer}>
                {/* Using placeholder for now if image not available, but user said no placeholders. 
             Since we are mocking, we will use a credible external placeholder service or solid color if preferred, 
             but `next/image` requires a src. Design object will provide it. */}
                <img src={design.imageUrl} alt={design.title} />
                {design.isNew && <span className={styles.badge}>New</span>}
            </div>
            <div className={styles.content}>
                <h3>{design.title}</h3>
                <div className={styles.meta}>
                    <span>{design.stitchCount.toLocaleString()} Stitches</span>
                    <span>•</span>
                    <span>{design.hoopSize}</span>
                </div>
                <div className={styles.footer}>
                    <span className={styles.price}>₹{design.price}</span>
                    <span className={styles.rating}>{'★'.repeat(5)}</span>
                </div>
            </div>
        </Link>
    );
}

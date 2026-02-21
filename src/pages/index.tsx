import Layout from '../components/Layout';
import Link from 'next/link';
import DesignCard from '../components/DesignCard';
import { designs } from '../data/designs';
import styles from '../styles/Home.module.scss';
import Button from '../components/Button';
import AIDesignUpload from '../components/AIDesignUpload';

export default function Home() {
  const featuredDesigns = designs.slice(0, 4);

  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Premium Embroidery Designs for Every Machine</h1>
          <p>Explore thousands of high-quality designs, verified for compatibility with Brother, Janome, Bernina and more.</p>
          <div className={styles.buttons}>
            <Link href="/browse"><Button variant="primary" size="large">Browse Collection</Button></Link>
            <Link href="/contact"><Button variant="primary" size="large">Custom Orders</Button></Link>
          </div>
        </div>
      </div>

      <AIDesignUpload />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Featured Designs</h2>
            <Link href="/browse">View All &rarr;</Link>
          </div>
          <div className={styles.grid}>
            {featuredDesigns.map(design => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.feature}>
            <h3>Instant Download</h3>
            <p>Get your files immediately after secure purchase.</p>
          </div>
          <div className={styles.feature}>
            <h3>Verified Quality</h3>
            <p>Every design is manually tested for stitch quality.</p>
          </div>
          <div className={styles.feature}>
            <h3>All Formats</h3>
            <p>PES, DST, JEF, XXX, EXP, VIP, HUS and more included.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

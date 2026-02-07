import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import styles from '../Blog.module.scss'; // Reusing blog styles for simplicity or create new

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;

    // Mock data - in real app would fetch based on slug
    const post = {
        title: 'The Ultimate Guide to Embroidery Stabilizers',
        date: 'February 2, 2026',
        content: `
      <p>Embroidery stabilizers are the unsung heroes of machine embroidery. Without them, your fabric would huge, pucker, and distort. But with so many options on the market, how do you choose the right one?</p>
      
      <h3>Cut-Away Stabilizer</h3>
      <p>Best for knits and stretchy fabrics. As the name suggests, you cut away the excess after stitching. It provides permanent support for the design.</p>
      
      <h3>Tear-Away Stabilizer</h3>
      <p>Best for woven fabrics that don't stretch. It's easy to remove and provides temporary support during the stitching process.</p>
      
      <h3>Water-Soluble Stabilizer</h3>
      <p>Perfect for lace, towels, and fabrics where you don't want any backing to show. It dissolves completely in water.</p>
    `
    };

    return (
        <Layout title={`${post.title} - EmbroMart Blog`}>
            <div className={styles.container}>
                <article className={styles.post}>
                    <header className={styles.header}>
                        <span className={styles.date}>{post.date}</span>
                        <h1>{post.title}</h1>
                    </header>

                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
            </div>
        </Layout>
    );
}

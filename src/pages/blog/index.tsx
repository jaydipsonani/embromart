import Layout from '../../components/Layout';
import Link from 'next/link';
import styles from './Blog.module.scss';

const POSTS = [
    {
        slug: 'stabilizer-guide',
        title: 'The Ultimate Guide to Embroidery Stabilizers',
        excerpt: 'Learn which stabilizer to use for every fabric type to ensure perfect results every time.',
        date: 'February 2, 2026',
        image: 'https://images.unsplash.com/photo-1544604907-d779bb073d32?auto=format&fit=crop&q=80&w=600'
    },
    {
        slug: 'top-10-fonts',
        title: 'Top 10 Monogram Fonts for 2026',
        excerpt: 'Our curated list of the best-selling and most beautiful monogram fonts for your next project.',
        date: 'January 28, 2026',
        image: 'https://images.unsplash.com/photo-1595186266205-7763f9269d0d?auto=format&fit=crop&q=80&w=600'
    },
    {
        slug: 'machine-maintenance',
        title: '5 Tips for Maintaining Your Embroidery Machine',
        excerpt: 'Keep your machine running smoothly with these essential maintenance tips from the pros.',
        date: 'January 15, 2026',
        image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=600'
    }
];

export default function Blog() {
    return (
        <Layout title="Blog - EmbroMart">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>EmbroMart Blog</h1>
                    <p>Tips, tricks, and inspiration for machine embroidery enthusiasts.</p>
                </div>

                <div className={styles.grid}>
                    {POSTS.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                            <div className={styles.image}>
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.date}>{post.date}</span>
                                <h2>{post.title}</h2>
                                <p>{post.excerpt}</p>
                                <span className={styles.readMore}>Read Article &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

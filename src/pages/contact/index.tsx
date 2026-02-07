import Layout from '../../components/Layout';
import Button from '../../components/Button';
import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <Layout title="Contact Us - EmbroMart">
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <p className={styles.subtitle}>Have a question about a design or your order? We're here to help.</p>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.group}>
                        <label>Name</label>
                        <input type="text" placeholder="Your name" required />
                    </div>

                    <div className={styles.group}>
                        <label>Email</label>
                        <input type="email" placeholder="your@email.com" required />
                    </div>

                    <div className={styles.group}>
                        <label>Message</label>
                        <textarea rows={5} placeholder="How can we help?" required></textarea>
                    </div>

                    <Button type="submit">Send Message</Button>
                </form>
            </div>
        </Layout>
    );
}

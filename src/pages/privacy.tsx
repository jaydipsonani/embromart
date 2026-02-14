import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss'; // Reusing home styles for container or create new if needed

export default function PrivacyPolicy() {
    return (
        <Layout title="Privacy Policy - EmbroMart">
            <div className={styles.container} style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', color: '#333' }}>Privacy Policy</h1>
                <div style={{ lineHeight: '1.6', color: '#555' }}>
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#333' }}>1. Introduction</h2>
                    <p>
                        Welcome to EmbroMart. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#333' }}>2. Data We Collect</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                        <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#333' }}>3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#333' }}>4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#333' }}>5. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at support@embromart.com.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

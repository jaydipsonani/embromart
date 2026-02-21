import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';
import styles from './Auth.module.scss';
import { useRouter } from 'next/router';

export default function SignUp() {
    const router = useRouter();
    const { loginWithGoogle, signup, isLoading } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirectPath = router.query.redirect as string;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await signup(name, email, password, redirectPath);
    };

    const handleGoogleLogin = async () => {
        await loginWithGoogle(redirectPath);
    };

    return (
        <Layout title="Sign Up - EmbroMart" hideFooter={true}>
            <div className={styles.authContainer}>
                <div className={styles.authCard}>
                    <h1>Create Account</h1>
                    <p className={styles.subtitle}>
                        Already have an account? <Link href={`/auth/signin${redirectPath ? `?redirect=${redirectPath}` : ''}`}>Sign In</Link>
                    </p>
                    <button
                        type="button"
                        className={styles.googleButton}
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                    >
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                        Sign in with Google
                    </button>
                    <div className={styles.divider}>Or sign in with email</div>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.group}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <Button type="submit" size="large" disabled={isLoading}>
                            {isLoading ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

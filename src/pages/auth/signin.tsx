import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';
import styles from './Auth.module.scss';
import Head from 'next/head';

export default function SignIn() {
    const { login, loginWithGoogle, isLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <Layout title="Sign In - EmbroMart">
            <div className={styles.authContainer}>
                <div className={styles.authCard}>
                    <h1>Welcome Back</h1>
                    <p className={styles.subtitle}>
                        Don't have an account? <Link href="/auth/signup">Sign Up</Link>
                    </p>

                    <button
                        type="button"
                        className={styles.googleButton}
                        onClick={loginWithGoogle}
                        disabled={isLoading}
                    >
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                        Sign in with Google
                    </button>

                    <div className={styles.divider}>Or sign in with email</div>

                    <form onSubmit={handleSubmit}>
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
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <Button type="submit" size="large" disabled={isLoading}>
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </Button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

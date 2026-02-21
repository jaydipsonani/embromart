import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';
import styles from './Profile.module.scss';
import Head from 'next/head';

export default function ProfilePage() {
    const { user, isLoading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/auth/signin?redirect=/profile');
        }
    }, [user, isLoading, router]);

    if (isLoading || !user) {
        return (
            <Layout title="Profile - EmbroMart">
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>
                </div>
            </Layout>
        );
    }

    const initials = user.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <Layout title="My Profile - EmbroMart">
            <div className={styles.container}>
                <div className={styles.profileCard}>
                    <div className={styles.header}>
                        <div className={styles.avatarWrapper}>
                            {user.photoURL ? (
                                <img src={user.photoURL} alt={user.name} className={styles.avatar} />
                            ) : (
                                <div className={styles.avatarPlaceholder}>{initials}</div>
                            )}
                        </div>
                        <h1 className={styles.name}>{user.name}</h1>
                        <p className={styles.email}>{user.email}</p>
                        <span className={styles.badge}>Member Since Feb 2026</span>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.section}>
                            <h3>Account Information</h3>
                            <div className={styles.infoGrid}>
                                <div className={styles.infoItem}>
                                    <label>Full Name</label>
                                    <p>{user.name}</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <label>Email Address</label>
                                    <p>{user.email}</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <label>User ID</label>
                                    <p>{user.id}</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <label>Account Status</label>
                                    <p>Active</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3>Preferences</h3>
                            <div className={styles.infoGrid}>
                                <div className={styles.infoItem}>
                                    <label>Language</label>
                                    <p>English (United States)</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <label>Currency</label>
                                    <p>INR (₹)</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <Button variant="secondary" onClick={() => router.push('/my-designs')}>
                                My Designs
                            </Button>
                            <Button variant="secondary" onClick={logout} style={{ color: '#dc2626', borderColor: '#fee2e2' }}>
                                Sign Out
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

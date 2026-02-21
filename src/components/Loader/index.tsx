import React from 'react';
import styles from './Loader.module.scss';
import { useLoading } from '../../context/LoadingContext';

const Loader: React.FC = () => {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <div className={styles.loaderOverlay}>
            <div className={styles.loaderContainer}>
                <div className={styles.spinner}></div>
                <div className={styles.logo}>
                </div>
            </div>
        </div>
    );
};

export default Loader;

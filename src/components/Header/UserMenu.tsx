import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { useAuth } from '../../context/AuthContext';

export default function UserMenu() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!user) return null;

    const initials = user.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <div className={styles.userMenuContainer} ref={menuRef}>
            <button
                className={styles.userButton}
                onClick={toggleMenu}
                aria-label="User menu"
            >
                {user.photoURL ? (
                    <img src={user.photoURL} alt={user.name} className={styles.avatar} />
                ) : (
                    <div className={styles.avatarPlaceholder}>{initials}</div>
                )}
                {/* <span className={styles.userName}>{user.name.split(' ')[0]}</span> */}
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.userInfo}>
                        <p className={styles.dropdownName}>{user.name}</p>
                        <p className={styles.dropdownEmail}>{user.email}</p>
                    </div>
                    <div className={styles.dropdownDivider} />
                    <Link href="/my-designs" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                        My Designs
                    </Link>
                    <Link href="/profile" className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                        Profile
                    </Link>
                    <div className={styles.dropdownDivider} />
                    <button className={`${styles.dropdownItem} ${styles.logout}`} onClick={logout}>
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
}

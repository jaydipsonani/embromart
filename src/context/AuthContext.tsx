import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from './ToastContext';
import { useRouter } from 'next/router';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

interface User {
    id: string;
    name: string;
    email: string;
    photoURL?: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string, redirectPath?: string) => Promise<void>;
    loginWithGoogle: (redirectPath?: string) => Promise<void>;
    signup: (name: string, email: string, password: string, redirectPath?: string) => Promise<void>;
    logout: () => Promise<void>;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Initial load is true to check auth state
    const { addToast } = useToast();
    const router = useRouter();

    // Listen for Firebase Auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // User is signed in with Firebase
                setUser({
                    id: firebaseUser.uid,
                    name: firebaseUser.displayName || 'User',
                    email: firebaseUser.email || '',
                    photoURL: firebaseUser.photoURL || undefined
                });
            } else {
                // Check for local storage user (fallback for static login)
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                } else {
                    setUser(null);
                }
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async (redirectPath?: string) => {
        setIsLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            addToast('Successfully signed in with Google!', 'success');
            router.push(redirectPath || '/');
        } catch (error: any) {
            console.error("Google Sign-In Error", error);
            addToast(`Google Sign-In failed: ${error.message}`, 'error');
            setIsLoading(false);
        }
    };

    const login = async (email: string, password: string, redirectPath?: string) => {
        setIsLoading(true);
        // Mock API call for legacy/static login
        setTimeout(() => {
            setIsLoading(false);
            if (password === 'password') { // Simple mock check
                const mockUser = { id: '1', name: 'Embroidery Fan', email, photoURL: undefined };
                setUser(mockUser);
                localStorage.setItem('user', JSON.stringify(mockUser));
                addToast('Welcome back!', 'success');
                router.push(redirectPath || '/');
            } else {
                // For demo purposes, allow login
                const mockUser = { id: '1', name: 'Embroidery Fan', email, photoURL: undefined };
                setUser(mockUser);
                localStorage.setItem('user', JSON.stringify(mockUser));
                addToast('Successfully signed in!', 'success');
                router.push(redirectPath || '/');
            }
        }, 1000);
    };

    const signup = async (name: string, email: string, password: string, redirectPath?: string) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const newUser = { id: Date.now().toString(), name, email };
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            addToast('Account created successfully!', 'success');
            router.push(redirectPath || '/');
        }, 1000);
    };

    const logout = async () => {
        try {
            await signOut(auth); // Sign out from Firebase
            setUser(null);
            localStorage.removeItem('user'); // Remove static user
            addToast('Logged out successfully.', 'info');
            router.push('/auth/signin');
        } catch (error) {
            console.error("Logout Error", error);
            addToast('Error logging out', 'error');
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, loginWithGoogle, signup, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

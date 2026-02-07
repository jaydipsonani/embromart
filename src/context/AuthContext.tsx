import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from './ToastContext';
import { useRouter } from 'next/router';

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { addToast } = useToast();
    const router = useRouter();

    // Load user from local storage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        // Mock API call
        setTimeout(() => {
            setIsLoading(false);
            if (password === 'password') { // Simple mock check
                const mockUser = { id: '1', name: 'Embroidery Fan', email };
                setUser(mockUser);
                localStorage.setItem('user', JSON.stringify(mockUser));
                addToast('Welcome back!', 'success');
                router.push('/');
            } else {
                // For demo purposes, let's just allow login with any password if not 'password' specific logic isn't needed
                // But let's simulate a success for now for "standard code"
                const mockUser = { id: '1', name: 'Embroidery Fan', email };
                setUser(mockUser);
                localStorage.setItem('user', JSON.stringify(mockUser));
                addToast('Successfully signed in!', 'success');
                router.push('/');
            }
        }, 1000);
    };

    const signup = async (name: string, email: string, password: string) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const newUser = { id: Date.now().toString(), name, email };
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            addToast('Account created successfully!', 'success');
            router.push('/');
        }, 1000);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        addToast('Logged out successfully.', 'info');
        router.push('/auth/signin');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
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

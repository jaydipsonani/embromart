import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { useToast } from '../../context/ToastContext';
import styles from './Checkout.module.scss';
import { designs } from '../../data/designs';

export default function Checkout() {
    const router = useRouter();
    const { addToast } = useToast();
    const [isProcessing, setIsProcessing] = useState(false);

    // Mock cart item (in real app, this comes from CartContext)
    const cartItem = designs[0];

    const handlePayment = async () => {
        setIsProcessing(true);
        addToast('Processing payment...', 'info');

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            addToast('Payment successful! Redirecting to downloads...', 'success');
            router.push('/downloads');
        }, 2000);
    };

    return (
        <Layout title="Checkout - EmbroMart">
            <div className={styles.container}>
                <h1>Secure Checkout</h1>

                <div className={styles.grid}>
                    <div className={styles.summary}>
                        <h2>Order Summary</h2>
                        <div className={styles.item}>
                            <img src={cartItem.imageUrl} alt={cartItem.title} />
                            <div>
                                <h4>{cartItem.title}</h4>
                                <p>{cartItem.hoopSize} • {cartItem.formats.join(', ')}</p>
                            </div>
                            <div className={styles.price}>₹{cartItem.price.toFixed(2)}</div>
                        </div>

                        <div className={styles.total}>
                            <span>Total</span>
                            <span>₹{cartItem.price.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className={styles.payment}>
                        <h2>Payment Details</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
                            <div className={styles.group}>
                                <label>Card Number</label>
                                <input type="text" placeholder="0000 0000 0000 0000" disabled />
                            </div>
                            <div className={styles.row}>
                                <div className={styles.group}>
                                    <label>Expiry</label>
                                    <input type="text" placeholder="MM/YY" disabled />
                                </div>
                                <div className={styles.group}>
                                    <label>CVC</label>
                                    <input type="text" placeholder="123" disabled />
                                </div>
                            </div>
                            <Button type="submit" size="large" disabled={isProcessing} style={{ width: '100%' }}>
                                {isProcessing ? 'Processing...' : `Pay ₹${cartItem.price.toFixed(2)}`}
                            </Button>
                            <p className={styles.note}>This is a mock checkout. No real payment is processed.</p>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

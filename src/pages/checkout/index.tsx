import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { useToast } from '../../context/ToastContext';
import { useAuth } from '../../context/AuthContext';
import styles from './Checkout.module.scss';
import { designs, Design } from '../../data/designs';

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function Checkout() {
    const router = useRouter();
    const { id } = router.query;
    const { addToast } = useToast();
    const { user, isLoading: authLoading } = useAuth();
    const [isProcessing, setIsProcessing] = useState(false);
    const [cartItem, setCartItem] = useState<Design | null>(null);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push(`/auth/signin?redirect=/checkout${id ? `?id=${id}` : ''}`);
            return;
        }

        if (id) {
            const design = designs.find(d => d.id === id);
            if (design) {
                setCartItem(design);
            } else {
                addToast('Design not found', 'error');
                router.push('/galary');
            }
        } else {
            // Fallback to first design if no id provided
            setCartItem(designs[0]);
        }

        // Load Razorpay script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [id, router, addToast]);

    const handlePayment = async () => {
        if (!cartItem) return;
        setIsProcessing(true);
        addToast('Initializing Razorpay...', 'info');

        try {
            // 1. Create order on backend
            const res = await fetch('/api/razorpay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: cartItem.price,
                    currency: 'INR',
                }),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const order = await res.json();

            // 2. Initialize Razorpay options
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_SIjTblZV8qK9L2', // Replace with your key
                amount: order.amount,
                currency: order.currency,
                name: 'EmbroMart',
                description: `Purchase ${cartItem.title}`,
                image: '/logo.png', // Add your logo path here
                order_id: order.id,
                handler: function (response: any) {
                    // console.log(response.razorpay_payment_id);
                    // console.log(response.razorpay_order_id);
                    // console.log(response.razorpay_signature);

                    setIsProcessing(false);
                    addToast('Payment successful! Redirecting to your designs...', 'success');

                    // Store purchased design in localStorage
                    const purchasedDesigns = JSON.parse(localStorage.getItem('purchasedDesigns') || '[]');
                    if (!purchasedDesigns.find((d: Design) => d.id === cartItem.id)) {
                        purchasedDesigns.push(cartItem);
                        localStorage.setItem('purchasedDesigns', JSON.stringify(purchasedDesigns));
                    }
                    router.push('/my-designs');
                },
                prefill: {
                    name: 'Embroidery Fan', // You can prefill user data here
                    email: 'customer@example.com',
                    contact: '9999999999'
                },
                notes: {
                    address: 'Embroidery Mart Corporate Office'
                },
                theme: {
                    color: '#3399cc'
                },
                modal: {
                    ondismiss: function () {
                        setIsProcessing(false);
                        addToast('Payment cancelled', 'info');
                    }
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response: any) {
                addToast(`Payment failed: ${response.error.description}`, 'error');
                setIsProcessing(false);
            });
            rzp1.open();

        } catch (error) {
            console.error('Payment Error:', error);
            addToast('Something went wrong. Please try again.', 'error');
            setIsProcessing(false);
        }
    };

    if (authLoading || (!cartItem && id)) {
        return <Layout title="Checkout - EmbroMart"><div className={styles.container}>Loading...</div></Layout>;
    }

    if (!cartItem) {
        return <Layout title="Checkout - EmbroMart"><div className={styles.container}>Design not found.</div></Layout>;
    }

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
                        <div className={styles.paymentMethod}>
                            <div className={styles.methods}>
                                <div className={`${styles.method} ${styles.selected}`}>
                                    <div className={styles.radio}></div>
                                    <div className={styles.icon}>
                                        <img src="https://razorpay.com/favicon.png" alt="Razorpay" />
                                    </div>
                                    <div className={styles.details}>
                                        <span>Razorpay</span>
                                        <span className={styles.badge}>Best Selection</span>
                                    </div>
                                </div>
                            </div>

                            <p className={styles.paymentInfo}>
                                Click "Pay Now" to complete your purchase securely with Razorpay.
                            </p>
                            <Button
                                size="large"
                                onClick={handlePayment}
                                disabled={isProcessing}
                                style={{ width: '100%', marginTop: '16px' }}
                            >
                                {isProcessing ? 'Processing...' : `Pay Now - ₹${cartItem.price.toFixed(2)}`}
                            </Button>
                            <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
                                <p>Secured by Razorpay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}


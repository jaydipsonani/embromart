import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { useToast } from '../../context/ToastContext';
import styles from './Checkout.module.scss';
import { designs, Design } from '../../data/designs';

export default function Checkout() {
    const router = useRouter();
    const { id } = router.query;
    const { addToast } = useToast();
    const [isProcessing, setIsProcessing] = useState(false);
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);
    const [cartItem, setCartItem] = useState<Design | null>(null);

    useEffect(() => {
        if (id) {
            const design = designs.find(d => d.id === id);
            if (design) {
                setCartItem(design);
            } else {
                addToast('Design not found', 'error');
                router.push('/browse');
            }
        } else {
            // Fallback to first design if no id provided
            setCartItem(designs[0]);
        }
    }, [id, router, addToast]);

    const handleBuyNow = () => {
        setShowPaymentMethod(true);
    };

    const handlePayment = async () => {
        setIsProcessing(true);
        addToast('Processing payment with Stripe...', 'info');

        // Simulate Stripe payment processing
        setTimeout(() => {
            setIsProcessing(false);
            addToast('Payment successful! Redirecting to your designs...', 'success');
            // Store purchased design in localStorage (in real app, this would be handled by backend)
            if (cartItem) {
                const purchasedDesigns = JSON.parse(localStorage.getItem('purchasedDesigns') || '[]');
                if (!purchasedDesigns.find((d: Design) => d.id === cartItem.id)) {
                    purchasedDesigns.push(cartItem);
                    localStorage.setItem('purchasedDesigns', JSON.stringify(purchasedDesigns));
                }
            }
            router.push('/my-designs');
        }, 2000);
    };

    if (!cartItem) {
        return <Layout title="Checkout - EmbroMart"><div className={styles.container}>Loading...</div></Layout>;
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
                        {!showPaymentMethod ? (
                            <div className={styles.paymentMethod}>
                                <p className={styles.paymentInfo}>Click "Buy Now" to proceed with payment</p>
                                <Button 
                                    size="large" 
                                    onClick={handleBuyNow} 
                                    style={{ width: '100%', marginTop: '16px' }}
                                >
                                    Buy Now - ₹{cartItem.price.toFixed(2)}
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
                                <div className={styles.paymentMethodBadge}>
                                    <span>💳</span>
                                    <span>Stripe Payment</span>
                                </div>
                                <div className={styles.group}>
                                    <label>Card Number</label>
                                    <input type="text" placeholder="4242 4242 4242 4242" maxLength={19} />
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.group}>
                                        <label>Expiry</label>
                                        <input type="text" placeholder="12/25" maxLength={5} />
                                    </div>
                                    <div className={styles.group}>
                                        <label>CVC</label>
                                        <input type="text" placeholder="123" maxLength={3} />
                                    </div>
                                </div>
                                <div className={styles.group}>
                                    <label>Cardholder Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <Button type="submit" size="large" disabled={isProcessing} style={{ width: '100%' }}>
                                    {isProcessing ? 'Processing Payment...' : `Pay ₹${cartItem.price.toFixed(2)}`}
                                </Button>
                                <p className={styles.note}>Secure payment powered by Stripe</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

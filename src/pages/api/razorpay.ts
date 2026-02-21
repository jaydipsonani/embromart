import type { NextApiRequest, NextApiResponse } from 'next';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_SIjTblZV8qK9L2', // Fallback for demo
    key_secret: process.env.RAZORPAY_KEY_SECRET || '5dJwNYG7Hw808jdeF9UjrULe', // Fallback for demo - REPLACE IN PROD
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { amount, currency } = req.body;

        const options = {
            amount: amount * 100, // amount in smallest currency unit
            currency: currency || "INR",
            receipt: "order_rcptid_" + Date.now(),
        };

        try {
            const order = await razorpay.orders.create(options);
            res.status(200).json(order);
        } catch (error: any) {
            console.error("Razorpay Order Creation Error:", error);
            res.status(500).json({ error: error.message || 'Error creating Razorpay order', details: error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

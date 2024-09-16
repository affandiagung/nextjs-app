'use client';
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log('tentukan pesanan');
        router.push('/');
    };
    return (
        <>
            <div>Order Prodict</div>
            <button onClick={handleClick}>Place Order</button>
        </>
    );
}

'use client';
import { notFound } from 'next/navigation';

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}
export default function ReviewDetail({
    params,
}: {
    params: { productId: string; reviewId: string };
}) {
    const random = getRandomInt(2);
    // if (random === 1) throw new Error('Something Wrong');
    if (
        isNaN(parseInt(params.reviewId)) ||
        parseInt(params.reviewId) > 100
    )
        notFound();
    return (
        <>
            <div>
                Review {params.reviewId} Detail about product{' '}
                {params.productId}
            </div>
        </>
    );
}

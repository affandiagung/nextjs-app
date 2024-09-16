import Link from 'next/link';

export default function ProductList() {
    const productId = 20;
    return (
        <>
            <Link href="/">Home</Link>
            <br />
            <Link href="products/1">Product 1</Link>
            <br />
            <Link href="products/2">Product 2</Link>
            <br />
            <Link href="products/3" replace>
                Product 3
            </Link>
            <br />
            <Link href={`products/${productId}`}>
                Product {productId}
            </Link>
        </>
    );
}

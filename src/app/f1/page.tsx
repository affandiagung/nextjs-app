import Link from 'next/link';

export default function F1() {
    return (
        <>
            <h1>
                F1 Page &nbsp;
                <Link href="/f1/f2">Go to F2 Page</Link>
            </h1>
        </>
    );
}

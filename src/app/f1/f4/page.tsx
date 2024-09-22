import Link from 'next/link';

export default function F4() {
    return (
        <>
            <h1>
                F4 Page &nbsp;
                <Link href="/f1/f3">Go TO F3 Page</Link>
                <br />
                <Link href="/about">Go TO About Page</Link>
            </h1>
        </>
    );
}

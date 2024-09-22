import Link from 'next/link';

export default function F2() {
    return (
        <>
            <h1>
                F2 Page &nbsp;
                <Link href="/f1">Back TO F1 Page</Link>
            </h1>
        </>
    );
}

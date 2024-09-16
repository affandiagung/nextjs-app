import { Metadata } from 'next';

export const metadata: Metadata = {
    // title: 'Second Blog',
    title: {
        absolute: 'Second Blog',
    },
};
export default function FirstBlog() {
    return <h1>This Is Second Blog</h1>;
}

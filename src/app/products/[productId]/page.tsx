import { Metadata } from 'next';

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => resolve(`iPhone ${params.productId}`), 1000);
    });
    return {
        title: `Product ${title}`,
    };
};

type Props = {
    params: {
        productId: string;
    };
};

export default function ProductDetail({ params }: Props) {
    return (
        <>
            <h1>Detail about product {params.productId}</h1>;
        </>
    );
}

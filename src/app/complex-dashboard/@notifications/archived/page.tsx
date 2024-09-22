import Card from '@/components/card';
import Link from 'next/link';

export default function ArchivedNotifications() {
    return (
        <>
            <Card>
                <div>Archived Notificationss</div>
                <Link href="/complex-dashboard">DefaUlt</Link>
            </Card>
        </>
    );
}

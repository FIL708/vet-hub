import getUserSession from '@/lib/getUserSession';
import AddOwnerForm from './AddOwnerForm';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'VetHub - Nowy właściciel',
};

export default async function NewOwnerPage() {
    const session = await getUserSession();
    if (!session) {
        redirect('/not-permitted');
    }
    return <AddOwnerForm />;
}

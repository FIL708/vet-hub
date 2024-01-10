import { getServerSession } from 'next-auth';
import AddOwnerForm from './AddOwnerForm';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'VetHub - Nowy właściciel',
};

export default async function NewOwnerPage() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/not-permitted');
    }
    return <AddOwnerForm />;
}

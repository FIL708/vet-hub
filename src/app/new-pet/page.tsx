import { getServerSession } from 'next-auth';
import AddPetForm from './AddPetForm';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'VetHub - Nowy zwierzak',
};

export default async function NewPetPage() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/not-permitted');
    }
    return <AddPetForm />;
}

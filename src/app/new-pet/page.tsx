import AddPetForm from './AddPetForm';
import { redirect } from 'next/navigation';
import getUserSession from '@/lib/getUserSession';

export const metadata = {
    title: 'VetHub - Nowy zwierzak',
};

export default async function NewPetPage() {
    const session = await getUserSession();
    if (!session) {
        redirect('/not-permitted');
    }
    return <AddPetForm />;
}

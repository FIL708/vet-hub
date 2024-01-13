import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export default async function getUserSession() {
    return await getServerSession(authOptions);
}

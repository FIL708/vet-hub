import { OwnerWithUser } from '@/types';
import OwnerCard from './OwnerCard';

interface OwnerListProps {
    ownersList: OwnerWithUser[];
}

export default function OwnersList({ ownersList }: OwnerListProps) {
    return (
        <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {ownersList.map((owner) => (
                <li key={owner.id}>
                    <OwnerCard owner={owner} />
                </li>
            ))}
        </ul>
    );
}

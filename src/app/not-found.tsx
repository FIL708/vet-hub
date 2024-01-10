import Image from 'next/image';
import notFound from '@/assets/not-found.png';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className='flex flex-col gap-4'>
            <Image src={notFound} width={300} height={300} alt='Not Found' />
            <h1 className='text-center text-2xl font-medium text-secondary'>
                Nikt nie wie o co Ci chodzi
            </h1>
            <Link href='/' className='btn btn-primary text-lg'>
                Strona startowa
            </Link>
        </div>
    );
}

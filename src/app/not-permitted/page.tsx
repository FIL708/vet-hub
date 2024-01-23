import AuthButton from '@/components/AuthButton';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import getUserSession from '@/lib/getUserSession';

export const metadata = {
    title: 'VetHub - Zaloguj się!',
};

export default async function NotPermittedPage() {
    const session = await getUserSession();
    if (session) {
        redirect('/');
    }

    return (
        <div className='flex flex-col items-center gap-4 px-4'>
            <h1 className='text-2xl font-bold text-primary'>Zaloguj się!</h1>
            <Image
                unoptimized
                src='https://gifdb.com/images/high/mr-rogers-wearing-clown-mask-xviiaxhhprrmredu.webp'
                alt='clown gif'
                width={100}
                height={100}
                className='w-full rounded-xl sm:max-w-xl'
                priority
            />
            <p className='w-full text-justify font-medium sm:max-w-xl'>
                Aby korzystać z wszystkich atrakcji, musisz przywdziać swoją
                wirtualną maskę klauna! 🤡 Zaloguj się teraz i dołącz do
                cyrkowej ekipy, bo bez Ciebie to jak przyjęcie urodzinowe bez
                tortu! 🍰 Let&apos;s clown around together! 🤹‍♂️🎉
            </p>
            <AuthButton session={session} />
        </div>
    );
}

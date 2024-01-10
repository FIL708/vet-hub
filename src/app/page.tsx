import Image from 'next/image';

export const metadata = {
    title: 'VetHub',
};

export default function Home() {
    return (
        <>
            <Image
                src='https://gifdb.com/images/high/mr-rogers-wearing-clown-mask-xviiaxhhprrmredu.webp'
                alt='clown gif'
                width={100}
                height={100}
                className='w-full sm:w-1/2'
                priority
            />
            <p className='text-justify text-lg'>
                Aby korzystać z wszystkich atrakcji, musisz przywdziać swoją
                wirtualną maskę klauna! 🤡 Zaloguj się teraz i dołącz do
                cyrkowej ekipy, bo bez Ciebie to jak przyjęcie urodzinowe bez
                tortu! 🍰 Let&apos;s clown around together! 🤹‍♂️🎉
            </p>
        </>
    );
}

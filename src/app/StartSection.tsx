import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/icons/logo.svg';

export default function StartSection() {
    return (
        <section className='hero bg-base-200 py-5 lg:py-12'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <Image
                    src='https://images.unsplash.com/photo-1544289444-7992bb5e7e28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    className='max-w-[200px] rounded-lg shadow-2xl lg:max-w-2xl'
                    width={300}
                    height={500}
                    alt='start section picture'
                    priority
                />
                <div>
                    <h1 className='flex items-end gap-2 text-3xl font-bold text-secondary sm:text-5xl lg:text-6xl'>
                        Witaj w VetHub{' '}
                        <Logo className='h-12 w-12 fill-secondary lg:h-16 lg:w-16' />
                    </h1>
                    <p className='py-6 text-justify lg:text-lg'>
                        Witaj w Krainie Komicznych Zwierzaków! 🐾🤪 Dodawaj
                        dowcipne kombinacje, które rozśmieszają nawet
                        najpoważniejszych – bo tu każdy dzień to prawdziwe
                        przedstawienie! Przygotuj się na cyrkowe szaleństwo,
                        gdzie klauni zamieniają się w zwierzęta, a zwierzęta w
                        największych klaunów! 🎪🤹‍♂️🦓
                    </p>
                    <Link href='/pets' className='btn btn-primary'>
                        Zaczynajmy!
                    </Link>
                </div>
            </div>
        </section>
    );
}

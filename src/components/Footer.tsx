import Logo from '@/assets/icons/logo.svg';
import Github from '@/assets/icons/github.svg';
import Facebook from '@/assets/icons/facebook.svg';
import Gmail from '@/assets/icons/gmail.svg';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='footer place-items-center bg-base-300 p-10 text-base-content sm:place-items-start'>
            <aside className='flex flex-col items-center sm:items-start'>
                <Logo className='h-20 w-20 rounded-full border-2 fill-current' />
                <p>
                    VetHub
                    <br />
                    Twój cyrk, Twoje życie!
                </p>
            </aside>
            <nav>
                <header className='footer-title'>Nawigacja</header>
                <Link className='link-hover link' href='/pets'>
                    List zwierząt
                </Link>
                <Link className='link-hover link' href='/owners'>
                    Lista nazwisk
                </Link>
                <Link className='link-hover link' href='/add-pet'>
                    Dodaj zwierzaka
                </Link>
                <Link className='link-hover link' href='/add-owner'>
                    Dodaj nazwisko
                </Link>
            </nav>

            <nav>
                <header className='footer-title'>Social</header>
                <div className='grid grid-flow-col gap-4'>
                    <Link
                        href='https://github.com/FIL708'
                        className='btn btn-circle btn-outline rounded-full'
                    >
                        <Github className='h-8 w-8 fill-current' />
                    </Link>
                    <Link
                        href='https://www.facebook.com/f.zebrowski'
                        className='btn btn-circle btn-outline rounded-full'
                    >
                        <Facebook className='h-8 w-8 fill-current' />
                    </Link>
                    <Link
                        href=''
                        className='btn btn-circle btn-outline rounded-full'
                    >
                        <Gmail className='h-8 w-8 fill-current' />
                    </Link>
                </div>
            </nav>
        </footer>
    );
}

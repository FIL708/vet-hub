import Link from 'next/link';
import NavDropdown from './NavDropdown';
import UserDropdown from './UserDropdown';
import Logo from '@/assets/logo.svg';

export default function Header() {
    return (
        <div className='navbar shadow-lg'>
            <NavDropdown />
            <div className='navbar-center'>
                <Link
                    href='/'
                    className='flex items-center gap-2 rounded-xl p-2 text-3xl text-primary transition hover:bg-base-300 active:scale-95'
                >
                    <Logo className='h-12 w-12 fill-primary' />
                    VetHub
                </Link>
            </div>
            <UserDropdown />
        </div>
    );
}

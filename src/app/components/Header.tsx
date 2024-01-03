import Link from 'next/link';
import NavDropdown from './NavDropdown';
import UserDropdown from './UserDropdown';
import Logo from '@/app/assets/logo.svg';

export default function Header() {
    return (
        <div className='navbar bg-base-100'>
            <NavDropdown />
            <div className='flex-1'>
                <Link href='/' className='btn btn-ghost text-xl'>
                    <Logo className='h-12 w-12 fill-current' />
                    VetHub
                </Link>
            </div>
            <UserDropdown />
        </div>
    );
}

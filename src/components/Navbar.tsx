import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link href='/' className='flex-1'>
                <Image
                    src='/logo-nav.png'
                    alt='Kram Leszy logo'
                    width={228}
                    height={42}
                />
            </Link>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link href='/'>Warsztaty</Link>
                    </li>
                    <li>
                        <Link href='/'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/'>Galeria</Link>
                    </li>
                    <li>
                        <Link href='/'>O nas</Link>
                    </li>
                    <li>
                        <Link href='/'>Kontakt</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

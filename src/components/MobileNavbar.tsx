import Link from 'next/link';
import DrawerToggle from './DrawerToggle';

export default function MobileNavbar() {
    const links = [
        { href: '/events', title: 'Warsztaty' },
        { href: '/blog', title: 'Blog' },
        { href: '/gallery', title: 'Galeria' },
        { href: '/about', title: 'O nas' },
        { href: '/contact', title: 'Kontakt' },
    ];

    const linkList = links.map((link) => (
        <li key={link.title}>
            <Link href={link.href}>{link.title}</Link>
        </li>
    ));

    return (
        <ul className='menu min-h-full w-80 bg-base-100 p-4'>
            <div className='ml-auto'>
                <DrawerToggle type='close' />
            </div>
            <h2 className='my-2 text-center text-xl'>Menu</h2>
            <li>
                <Link href='/products'>Produkty</Link>
                <ul>
                    <li>
                        <Link href='/products'>Biżuteria</Link>
                    </li>
                    <li>
                        <Link href='/products'>Tkactwo</Link>
                    </li>
                    <li>
                        <Link href='/products'>Stolarstwo</Link>
                    </li>
                </ul>
            </li>
            {linkList}
        </ul>
    );
}

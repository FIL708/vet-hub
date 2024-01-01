'use client';

import DrawerToggle from './DrawerToggle';
import DrawerLink from './DrawerLink';
import { usePathname } from 'next/navigation';
import MobileLangSwitcher from './MobileLangSwitcher';

export default function MobileNavbar() {
    const currentPath = usePathname();
    const links = [
        { href: '/events', title: 'Warsztaty' },
        { href: '/blog', title: 'Blog' },
        { href: '/gallery', title: 'Galeria' },
        { href: '/about', title: 'O nas' },
        { href: '/contact', title: 'Kontakt' },
    ];

    const linkList = links.map((link) => (
        <li key={link.title}>
            <DrawerLink href={link.href} active={currentPath === link.href}>
                {link.title}
            </DrawerLink>
        </li>
    ));

    return (
        <ul className='menu min-h-full w-80 bg-base-100 p-4'>
            <div className='ml-auto'>
                <DrawerToggle type='close' />
            </div>
            <h2 className='my-2 text-center text-xl'>Menu</h2>
            <div className='divider divider-primary mt-0'></div>
            <li>
                <DrawerLink
                    href='/products'
                    active={currentPath === '/products'}
                >
                    Produkty
                </DrawerLink>
                <ul>
                    <li>
                        <DrawerLink href='/products'>Biżuteria</DrawerLink>
                    </li>
                    <li>
                        <DrawerLink href='/products'>Tkactwo</DrawerLink>
                    </li>
                    <li>
                        <DrawerLink href='/products'>Stolarstwo</DrawerLink>
                    </li>
                </ul>
            </li>

            {linkList}

            <MobileLangSwitcher />
        </ul>
    );
}

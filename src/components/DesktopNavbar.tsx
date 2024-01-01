'use client';

import { usePathname } from 'next/navigation';
import NavbarLink from './NavbarLink';
import Arrow from '@/assets/arrow.svg';
import LangSwitcher from './LangSwitcher';

export default function DesktopNavbar() {
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
            <NavbarLink href={link.href} active={currentPath === link.href}>
                {link.title}
            </NavbarLink>
        </li>
    ));
    return (
        <nav>
            <ul className='hidden flex-row items-center gap-1 lg:flex'>
                <li>
                    <div className='dropdown dropdown-hover'>
                        <div tabIndex={0} role='button'>
                            <NavbarLink href='/products'>
                                Produkty <Arrow className='fill-secondary' />
                            </NavbarLink>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu dropdown-content z-[1] w-fit rounded-box bg-base-100 p-4 shadow-lg'
                        >
                            <li>
                                <NavbarLink href='/products'>
                                    Biżuteria
                                </NavbarLink>
                            </li>
                            <li>
                                <NavbarLink href='/products'>
                                    Tkactwo
                                </NavbarLink>
                            </li>
                            <li>
                                <NavbarLink href='/products'>
                                    Stolarstwo
                                </NavbarLink>
                            </li>
                        </ul>
                    </div>
                </li>

                {linkList}

                <li>
                    <LangSwitcher />
                </li>
            </ul>
        </nav>
    );
}

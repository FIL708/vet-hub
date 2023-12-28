'use client';

import { usePathname } from 'next/navigation';
import NavbarLink from './NavbarLink';
import Image from 'next/image';
import globeIcon from '@/assets/globe.svg';

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
            <NavbarLink href={link.href}>{link.title}</NavbarLink>
        </li>
    ));
    return (
        <nav>
            <ul className='flex flex-row gap-1'>
                <li>
                    <div className='dropdown dropdown-hover'>
                        <div tabIndex={0} role='button' className='p-0'>
                            <NavbarLink href='/products'>Produkty</NavbarLink>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu dropdown-content z-[1] w-fit rounded-box bg-base-100 p-4 shadow'
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
                    <div className='dropdown dropdown-end'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost h-7 w-7 rounded-full'
                        >
                            <Image
                                src={globeIcon}
                                width={24}
                                height={24}
                                alt='language'
                            />
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2'
                        >
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

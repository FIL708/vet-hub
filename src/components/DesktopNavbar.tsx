import Link from 'next/link';
import NavbarLink from './NavbarLink';

export default function DesktopNavbar() {
    return (
        <nav>
            <ul className='flex flex-row gap-1'>
                <li className='flex'>
                    <div className='dropdown dropdown-hover'>
                        <div tabIndex={0} role='button' className='p-0'>
                            <NavbarLink href='/'>Produkty</NavbarLink>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu dropdown-content z-[1] w-fit rounded-box bg-base-100 p-3 shadow'
                        >
                            <li>
                                <NavbarLink href='/'>Warsztaty</NavbarLink>
                            </li>
                            <li>
                                <NavbarLink href='/'>Warsztaty</NavbarLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <NavbarLink href='/'>Warsztaty</NavbarLink>
                </li>
                <li>
                    <NavbarLink href='/'>Blog</NavbarLink>
                </li>
                <li>
                    <NavbarLink href='/'>Galeria</NavbarLink>
                </li>
                <li>
                    <NavbarLink href='/'>O nas</NavbarLink>
                </li>
                <li>
                    <NavbarLink href='/'>Kontakt</NavbarLink>
                </li>
                <li>
                    <div className='dropdown dropdown-end'>
                        <div tabIndex={0} role='button' className='btn m-1'>
                            Click
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow'
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

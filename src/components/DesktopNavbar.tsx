import NavbarLink from './NavbarLink';

export default function DesktopNavbar() {
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
                <li>
                    <NavbarLink href='/events'>Warsztaty</NavbarLink>
                </li>
                <li>
                    <NavbarLink href='/blog'>Blog</NavbarLink>
                </li>
                <li>
                    <NavbarLink href='/gallery'>Galeria</NavbarLink>
                </li>
                <li>
                    <NavbarLink href='/about'>O nas</NavbarLink>
                </li>
                <li>
                    <NavbarLink href='/contact'>Kontakt</NavbarLink>
                </li>
                <li>
                    <div className='dropdown dropdown-end'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost'
                        >
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

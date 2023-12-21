import Image from 'next/image';
import Link from 'next/link';

type NavbarProps = {
    children: React.ReactNode;
};

export default function Navbar({ children }: NavbarProps) {
    return (
        <div className='drawer'>
            <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col'>
                {/* Navbar */}
                <div className='navbar w-full bg-base-300'>
                    <Link href='/' className='flex-1'>
                        <Image
                            src='/logo-nav.png'
                            alt='Kram Leszy logo'
                            width={228}
                            height={42}
                        />
                    </Link>
                    <div className='flex-none lg:hidden'>
                        <label
                            htmlFor='my-drawer-3'
                            aria-label='open sidebar'
                            className='btn btn-square btn-ghost'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                className='inline-block h-6 w-6 stroke-current'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h16'
                                ></path>
                            </svg>
                        </label>
                    </div>

                    <div className='hidden flex-none lg:block'>
                        <ul className='menu menu-horizontal'>
                            {/* Navbar menu content here */}
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
                </div>
                {children}
            </div>
            <div className='drawer-side'>
                <label
                    htmlFor='my-drawer-3'
                    aria-label='close sidebar'
                    className='drawer-overlay'
                ></label>
                <ul className='menu min-h-full w-80 bg-base-200 p-4'>
                    {/* Sidebar content here */}
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

import Image from 'next/image';
import Link from 'next/link';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import DrawerToggle from './DrawerToggle';

export default function Drawer({ children }: { children: React.ReactNode }) {
    return (
        <div className='drawer drawer-end'>
            <input id='drawer' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col'>
                <header className='navbar m-auto mt-2 max-w-7xl'>
                    <div className='mx-2 flex-1 px-2'>
                        <Link href='/'>
                            <Image
                                src='/logo-nav.png'
                                alt='Kram Leszy logo'
                                width={228}
                                height={42}
                                priority
                            />
                        </Link>
                    </div>
                    <DesktopNavbar />
                    <DrawerToggle type='open' />
                </header>
                {children}
            </div>
            <div className='drawer-side lg:hidden'>
                <label
                    htmlFor='drawer'
                    aria-label='close sidebar'
                    className='drawer-overlay'
                ></label>
                <MobileNavbar />
            </div>
        </div>
    );
}

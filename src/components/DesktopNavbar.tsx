import Link from 'next/link';

export default function DesktopNavbar() {
    return (
        <nav className='flex-none'>
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
                <li>
                    <details>
                        <summary>Parent</summary>
                        <ul className='rounded-t-none bg-base-100 p-2'>
                            <li>
                                <a>Link 1</a>
                            </li>
                            <li>
                                <a>Link 2</a>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </nav>
    );
}

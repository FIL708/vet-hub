import NavbarLink from '@/components/NavbarLink';

export default function Home() {
    return (
        <>
            <h1 className=''>Home Page</h1> <NavbarLink />
            <div className='dropdown dropdown-hover'>
                <div tabIndex={0} role='button'>
                    <NavbarLink href='/'>Warsztaty</NavbarLink>
                </div>
                <ul
                    tabIndex={0}
                    className='menu dropdown-content z-[1] w-fit rounded-box  bg-base-100 p-2 shadow'
                >
                    <li>
                        <NavbarLink href='/'>Warsztaty</NavbarLink>
                    </li>
                    <li>
                        <NavbarLink href='/'>Warsztaty</NavbarLink>
                    </li>
                </ul>
            </div>
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
        </>
    );
}

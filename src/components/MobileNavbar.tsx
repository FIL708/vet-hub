import DrawerToggle from './DrawerToggle';

export default function MobileNavbar() {
    return (
        <ul className='menu min-h-full w-80 bg-base-100 p-4'>
            <DrawerToggle type='close' />
            <li>
                <a>Sidebar Item 1</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
        </ul>
    );
}

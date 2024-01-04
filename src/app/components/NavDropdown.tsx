export default function NavDropdown() {
    return (
        <div className='navbar-start'>
            <div className='dropdown'>
                <button
                    tabIndex={0}
                    role='button'
                    className='btn btn-square btn-ghost'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='inline-block h-5 w-5 stroke-current'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16M4 18h16'
                        ></path>
                    </svg>
                </button>
                <ul
                    tabIndex={0}
                    className='menu dropdown-content z-[1] w-48 rounded-box border-2 border-base-200 bg-base-100 p-2 shadow-xl'
                >
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li>
                        <a>Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

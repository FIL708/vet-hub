import ThemeSwitcher from './ThemeSwitcher';

export default function UserDropdown() {
    return (
        <div className='navbar-end'>
            <div className='dropdown dropdown-end'>
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
                            d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                        ></path>
                    </svg>
                </button>
                <ul
                    tabIndex={0}
                    className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow'
                >
                    <ThemeSwitcher />
                    <button className='btn btn-primary'>Login</button>
                </ul>
            </div>
        </div>
    );
}
import Hamburger from '@/assets/hamburger.svg';
import Close from '@/assets/close.svg';

export default function DrawerToggle({ type }: { type: 'open' | 'close' }) {
    const Icon = type === 'open' ? <Hamburger /> : <Close />;

    return (
        <div className='flex-none lg:hidden'>
            <label
                htmlFor='my-drawer-3'
                aria-label={`${type} sidebar`}
                className='btn btn-circle border-transparent bg-primary-content hover:border-secondary-content hover:bg-secondary-content lg:hidden'
            >
                {Icon}
            </label>
        </div>
    );
}

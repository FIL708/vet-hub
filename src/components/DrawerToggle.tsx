import Hamburger from '@/assets/hamburger.svg';
import Close from '@/assets/close.svg';

export default function DrawerToggle({ type }: { type: 'open' | 'close' }) {
    const Icon =
        type === 'open' ? (
            <Hamburger className='fill-neutral' />
        ) : (
            <Close className='fill-neutral' />
        );

    return (
        <label
            htmlFor='drawer'
            aria-label={`${type} sidebar`}
            className='btn btn-circle border-transparent bg-transparent hover:border-secondary-content hover:bg-secondary-content lg:hidden'
        >
            {Icon}
        </label>
    );
}

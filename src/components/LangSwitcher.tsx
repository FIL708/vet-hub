import Globe from '@/assets/globe.svg';
import Arrow from '@/assets/arrow.svg';

export default function LangSwitcher() {
    return (
        <div className='dropdown dropdown-end'>
            <div tabIndex={0} role='button' className='flex items-center p-1'>
                <Globe className='fill-neutral' />
                <Arrow className='fill-secondary' />
            </div>
            <ul
                tabIndex={0}
                className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2'
            >
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <a>Item 2</a>
                </li>
            </ul>
        </div>
    );
}

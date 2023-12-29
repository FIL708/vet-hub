import Globe from '@/assets/globe.svg';
import Arrow from '@/assets/arrow.svg';
import EnFlag from '@/assets/en-flag.svg';
import PlFlag from '@/assets/pl-flag.svg';

export default function LangSwitcher() {
    return (
        <div className='dropdown dropdown-end'>
            <div
                tabIndex={0}
                role='button'
                className='flex items-center rounded-2xl border-2 border-transparent p-1 transition hover:border-primary hover:bg-primary-content active:scale-95'
            >
                <Globe className='fill-neutral' />
                <Arrow className='fill-secondary' />
            </div>
            <ul
                tabIndex={0}
                className='menu dropdown-content z-[1] rounded-box bg-base-100 p-2'
            >
                <li>
                    <a>
                        <PlFlag /> Polski
                    </a>
                </li>
                <li>
                    <a>
                        <EnFlag /> Angielski
                    </a>
                </li>
            </ul>
        </div>
    );
}

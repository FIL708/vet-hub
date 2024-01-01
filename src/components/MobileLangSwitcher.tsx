import closeDrawer from '@/lib/closeDrawer';
import Link from 'next/link';
import EnFlag from '@/assets/en-flag.svg';
import PlFlag from '@/assets/pl-flag.svg';

export default function MobileLangSwitcher() {
    const linkStyle =
        'flex w-28 items-center justify-center gap-2 rounded-full  border border-primary py-2 transition hover:bg-secondary-content active:scale-95';
    return (
        <div className='mt-5 flex justify-center gap-3'>
            <Link
                href='/'
                onClick={() => closeDrawer('drawer')}
                className={linkStyle}
            >
                <PlFlag /> Polski
            </Link>
            <Link
                href='/'
                onClick={() => closeDrawer('drawer')}
                className={linkStyle}
            >
                <EnFlag /> Angielski
            </Link>
        </div>
    );
}

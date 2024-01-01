import closeDrawer from '@/lib/closeDrawer';
import Link from 'next/link';

type DrawerLinkProps = {
    href: string;
    active?: boolean;
} & { children?: React.ReactNode };

export default function DrawerLink({
    href,
    children,
    active,
}: DrawerLinkProps) {
    const isActive = active ? ' border-s-primary' : '';

    return (
        <Link
            onClick={() => closeDrawer('drawer')}
            href={href}
            className={`rounded-none border-s-2 border-transparent${isActive} hover:bg-secondary-content`}
        >
            {children}
        </Link>
    );
}

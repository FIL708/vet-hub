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
    const closeDrawer = () => document.getElementById('drawer')?.click();

    const isActive = active ? ' border-s-primary' : '';

    return (
        <Link
            onClick={closeDrawer}
            href={href}
            className={`rounded-none border-s-2 border-transparent${isActive}`}
        >
            {children}
        </Link>
    );
}

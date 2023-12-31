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
            href={href}
            className={`rounded-none border-s-2 border-transparent${isActive}`}
        >
            {children}
        </Link>
    );
}

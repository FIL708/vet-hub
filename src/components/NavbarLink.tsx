import Link from 'next/link';
import { ReactNode } from 'react';

type NavbarLinkProps = {
    href: string;
    active?: boolean;
} & { children?: ReactNode };

export default function NavbarLink({
    href = '/',
    children = 'Link title',
    active = false,
}: NavbarLinkProps) {
    const isActiveClassName = active
        ? ''
        : ' after:scale-x-0 after:hover:origin-left after:hover:scale-x-100 after:origin-right';

    return (
        <Link
            href={href}
            className={`relative flex w-fit items-center gap-1 rounded-none px-4 py-2 after:absolute after:left-0 after:top-9 after:h-[3px] after:w-full after:rounded-xl after:bg-primary after:transition after:duration-300 hover:bg-transparent focus:bg-transparent after:content-[""]${isActiveClassName}`}
        >
            {children}
        </Link>
    );
}

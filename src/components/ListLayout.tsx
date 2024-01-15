interface ListLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export default function ListLayout({ children, className }: ListLayoutProps) {
    return (
        <ul
            className={`grid min-h-[564px] content-start gap-6 md:grid-cols-2 lg:grid-cols-3 ${
                className ? className : ''
            }`}
        >
            {children}
        </ul>
    );
}

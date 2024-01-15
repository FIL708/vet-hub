export default function CardsSkeleton({ pageSize }: { pageSize: number }) {
    return (
        <ul className='grid min-h-[540px] content-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {[...Array(pageSize)].map((_, index) => (
                <div
                    key={index}
                    className='skeleton h-[70px] w-72 rounded-lg border border-neutral-300 bg-base-300'
                ></div>
            ))}
        </ul>
    );
}

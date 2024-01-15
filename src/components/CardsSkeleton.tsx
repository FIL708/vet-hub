export default function CardsSkeleton({ pageSize }: { pageSize: number }) {
    return (
        <>
            <ul className='grid min-h-[540px] content-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {[...Array(pageSize)].map((_, index) => (
                    <div
                        key={index}
                        className='skeleton h-[74px] w-72 rounded-lg bg-base-300'
                    ></div>
                ))}
            </ul>
            <div className='h-12'></div>
        </>
    );
}

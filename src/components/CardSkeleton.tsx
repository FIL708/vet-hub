export default function CardSkeleton() {
    return (
        <ul className='grid content-start gap-6 md:grid-cols-2 lg:h-[540px] lg:grid-cols-3'>
            {[...Array(18)].map((_, index) => (
                <div
                    key={index}
                    className='skeleton h-[70px] w-72 rounded-lg border border-neutral-300 bg-base-300'
                ></div>
            ))}
        </ul>
    );
}

export default function Skeleton() {
    return (
        <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {[...Array(21)].map((_, index) => (
                <div
                    key={index}
                    className='skeleton h-[70px] w-72 rounded-lg border border-neutral-300 bg-base-300'
                ></div>
            ))}
        </ul>
    );
}

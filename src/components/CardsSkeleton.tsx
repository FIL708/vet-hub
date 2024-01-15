import ListLayout from './ListLayout';

export default function CardsSkeleton({ pageSize }: { pageSize: number }) {
    return (
        <>
            <ListLayout>
                {[...Array(pageSize)].map((_, index) => (
                    <div
                        key={index}
                        className='skeleton h-[74px] w-72 rounded-lg bg-base-300'
                    ></div>
                ))}
            </ListLayout>
            <div className='h-12'></div>
        </>
    );
}

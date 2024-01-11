import Image from 'next/image';

interface AvatarProps {
    src?: string | null;
    width?: string | null;
}

export default function Avatar({ src, width = '9' }: AvatarProps) {
    if (!src) {
        return (
            <div className='avatar placeholder'>
                <div
                    className={`w-${width} border-3 rounded-full border-primary bg-neutral text-neutral-content`}
                >
                    <span className='text-xl'>?</span>
                </div>
            </div>
        );
    }

    return (
        <div className='avatar'>
            <div className={`w-${width} h-${width} rounded-full`}>
                <Image src={src} width={20} height={20} alt='user avatar' />
            </div>
        </div>
    );
}

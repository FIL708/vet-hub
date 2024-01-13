import NewestSection from './NewestSection';
import StartSection from './StartSection';

export const metadata = {
    title: 'VetHub',
};

export default function Home() {
    return (
        <>
            <StartSection />
            <NewestSection />
        </>
    );
}

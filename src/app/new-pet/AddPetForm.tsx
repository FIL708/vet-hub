import SubmitButton from '@/components/SubmitButton';

export default function AddPetForm() {
    return (
        <form
            action=''
            className='flex w-full min-w-[300px] max-w-3xl flex-col gap-3 p-3'
        >
            <h1 className='text-xl font-bold text-primary'>
                Dodaj nowego zwierzaka
            </h1>
            <input
                required
                name='name'
                placeholder='Imię'
                className='input input-bordered w-full'
            />
            <select className='select select-bordered w-full'>
                <option disabled selected>
                    Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            <div className='form-control'>
                <label className='label cursor-pointer'>
                    <span className='label-text'>Przekierować po dodaniu?</span>
                    <input
                        name='redirected'
                        type='checkbox'
                        className='checkbox'
                    />
                </label>
            </div>
            <SubmitButton />
        </form>
    );
}

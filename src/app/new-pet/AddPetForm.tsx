'use client';

import SubmitButton from '@/components/SubmitButton';
import { addPet } from '@/lib/actions';
import { PetFormData } from '@/types';
import { useState } from 'react';

export default function AddPetForm() {
    const [formData, setFormData] = useState<PetFormData>({
        name: '',
        species: '',
        redirected: true,
    });

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmit = async () => {
        await addPet(formData);
        setFormData((prev) => ({ ...prev, name: '', species: '' }));
    };

    const speciesArray = [
        'pies',
        'kot',
        'koń',
        'kawia',
        'królik',
        'chomik',
        'inny',
    ];
    const optionsList = speciesArray.map((option) => (
        <option key={option} value={option}>
            {option}
        </option>
    ));
    return (
        <form
            action={onSubmit}
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
                onChange={handleChange}
                value={formData.name}
            />

            <select
                className='select select-bordered w-full'
                name='species'
                required
                value={formData.species}
                onChange={handleChange}
            >
                <option disabled selected value=''>
                    Wybierz gatunek
                </option>
                {optionsList}
            </select>

            <div className='form-control'>
                <label className='label cursor-pointer'>
                    <span className='label-text'>Przekierować po dodaniu?</span>
                    <input
                        name='redirected'
                        type='checkbox'
                        className='checkbox'
                        checked={formData.redirected}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <SubmitButton title='Dodaj zwierzaka' />
        </form>
    );
}

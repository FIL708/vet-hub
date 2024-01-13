'use client';

import { useState, ChangeEvent } from 'react';
import { addOwner } from '@/lib/actions';
import { OwnerFormData } from '@/types';
import SubmitButton from '../../components/SubmitButton';

export default function AddOwnerForm() {
    const [formData, setFormData] = useState<OwnerFormData>({
        firstName: '',
        lastName: '',
        redirected: true,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmit = async () => {
        await addOwner(formData);
        setFormData((prev) => ({ ...prev, firstName: '', lastName: '' }));
    };

    return (
        <form
            id='add-owner-form'
            action={onSubmit}
            className='flex w-full min-w-[300px] max-w-3xl flex-col gap-3 p-3'
        >
            <h1 className='text-2xl font-bold text-secondary'>
                Dodaj nowego właściciela
            </h1>
            <input
                required
                name='firstName'
                placeholder='Imię'
                className='input input-bordered w-full'
                value={formData.firstName}
                onChange={handleChange}
            />

            <input
                required
                type='text'
                name='lastName'
                placeholder='Nazwisko'
                className='input input-bordered w-full'
                value={formData.lastName}
                onChange={handleChange}
            />

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
            <SubmitButton title='Dodaj właściciela' />
        </form>
    );
}

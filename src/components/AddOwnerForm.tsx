'use client';

import { useState } from 'react';
import { addOwner } from '@/lib/db/actions';
import { OwnerFormData } from '@/types';
import Plus from '@/assets/plus.svg';
import SubmitButton from './SubmitButton';

export default function AddOwnerForm() {
    const [formData, setFormData] = useState<OwnerFormData>({
        firstName: '',
        lastName: '',
        redirect: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmit = () => {
        console.log(formData);
        addOwner(formData);
        setFormData((prev) => ({ ...prev, firstName: '', lastName: '' }));
    };

    return (
        <form
            id='owner-form'
            action={onSubmit}
            className='flex w-full min-w-[300px] max-w-3xl flex-col gap-3 p-3'
        >
            <h1 className='text-lg font-bold text-primary'>
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
                        name='redirect'
                        type='checkbox'
                        className='checkbox'
                        checked={formData.redirect}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <SubmitButton />
        </form>
    );
}

'use client';

import Plus from '@/assets/plus.svg';
import { addOwner } from '@/lib/db/actions';
import { useState } from 'react';

interface OwnerFormData {
    firstName: string;
    lastName: string;
    redirect: boolean;
}

export default function AddOwnerForm() {
    const [formData, setFormData] = useState<OwnerFormData>({
        firstName: '',
        lastName: '',
        redirect: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const add = (formData: FormData) => {
        addOwner(formData);
        const form = document.getElementById('owner-form') as HTMLFormElement;
        form.reset();
    };
    return (
        <form
            id='owner-form'
            action={add}
            className='flex w-full min-w-[300px] max-w-3xl flex-col gap-3 p-3'
        >
            <h1 className='text-lg font-bold text-primary'>
                Dodaj nowego właściciela {formData.redirect ? 'true' : 'false'}
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
                    <span className='label-text'>Chcę dodać wiecej...</span>
                    <input
                        name='redirect'
                        type='checkbox'
                        className='checkbox'
                        checked={formData.redirect}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type='submit' className='btn btn-primary'>
                <Plus className='fill-current' />
                Dodaj właściciela
            </button>
        </form>
    );
}

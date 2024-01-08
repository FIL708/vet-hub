'use client';

import SubmitButton from '@/components/SubmitButton';
import { useState } from 'react';

export default function AddPetForm() {
    useState;
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

            <select className='select select-bordered w-full' name='species'>
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
                    />
                </label>
            </div>
            <SubmitButton title='Dodaj zwierzaka' />
        </form>
    );
}

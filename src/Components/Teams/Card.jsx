import React from 'react';

export default function Card({ name, designation, imageUrl }) {
    return (
        <div className='m-[50px]'>
            <div className='w-[300px] h-[400px] bg-white pt-[20px] '>
                <div className='flex justify-center'>
                    <div className='w-[260px] h-[300px] bg-black'>
                        <img src={imageUrl} alt={name} className='w-full h-[300px] object-cover' />
                    </div>
                </div>
                <div className='text-3xl text-center font-bold'>{name}</div>
                <div className='text-xl text-center'>{designation}</div>
            </div>
        </div>
    );
}

import React from 'react';
import { SholawatLyric } from '../API/Sholawat';
import SholawatCard from '../components/SholawatCard';
import AudioPlayer from '../components/AudioPlayer';

const Sholawat = () => {
    return (
        <div className='w-full h-[41rem] px-5 lg:px-52 py-10 overflow-x-hidden'>
            <div className='bg-primary p-5 shadow-xl'>
                <h1 className='font-bold text-3xl text-white mb-5 font-Quisand'>Kumpulan Lirik Sholawat</h1>

                <div className='flex flex-col flex-wrap md:flex-row gap-1 md:gap-5'>
                    {SholawatLyric.map((item) => (
                        <SholawatCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sholawat;

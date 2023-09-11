import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SholawatLyric } from '../API/Sholawat';
import AudioPlayer from './AudioPlayer';


const LyricPage = () => {
    const { id } = useParams(); // Get the id from the URL parameter

    // Find the selected sholawat based on the id
    const selectedSholawat = SholawatLyric.find((item) => item.id === parseInt(id, 10));

    if (!selectedSholawat) {
        // Handle the case where the sholawat with the given id is not found
        return (
            <div>
                <h1>Lyrics not found</h1>
            </div>
        );
    }

    return (
        <div className='w-full lg:px-52 py-10 shadow'>
            <Link to={`/Sholawat`} >
                <div className='flex justify-between p-5 bg-primary mb-4 text-white'>
                    <span className='flex items-center text-[2rem] pl-2'><ion-icon name="arrow-back" className='text-2xl'></ion-icon></span>
                    <p className='flex items-center text-sm md:text-lg'>Qosidah | <span className='underline'> {selectedSholawat.title}</span></p>
                </div>
            </Link>

            <div className='bg-primary p-5 md:p-10 rounded-sm'>
                <AudioPlayer musicUrl={selectedSholawat.music_url} {...selectedSholawat} />
                <div className='mt-5 text-white'>
                    {selectedSholawat.lyrics.map((line, index) => (
                        <div key={index}>
                            <p className='text-right pb-10 pt-16 text-xl md:text-3xl font-Sche'>{line.text}</p>
                            <p className='font-Quisand text-left text-sm md:text-left border-b py-2'>{line.translation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LyricPage;

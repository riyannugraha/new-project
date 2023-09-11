import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';

const AudioPlayer = ({ musicUrl, title }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const handlePlayPauseClick = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleResetClick = () => {
        audioRef.current.currentTime = 0;
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
    };

    useEffect(() => {
        const audioElement = audioRef.current;

        const updateTime = () => {
            const currentTime = audioElement.currentTime;
            const duration = audioElement.duration;
            const newProgress = (currentTime / duration) * 100;
            setProgress(newProgress);
        };

        audioElement.addEventListener('timeupdate', updateTime);

        return () => {
            audioElement.removeEventListener('timeupdate', updateTime);
        };
    }, []);


    return (
        <div className="p-4 bg-green rounded-lg shadow-md border">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div
                        className={`w-12 h-12 bg-${isPlaying ? 'red' : 'red'
                            }-500 text-white flex items-center justify-center rounded-full cursor-pointer`}
                        onClick={handlePlayPauseClick}
                    >
                        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center md:gap-8'>
                        <div className="ml-4 flex-1">
                            <p className="text-sm md:text-lg font-semibold text-white">{title}</p>
                            <a href="https://www.majelisrasulullah.org/" target="_blank" className='text-white text-xs md:text-sm'> * Majelis Rasulullah SAW</a>
                        </div>
                        <div className="w-full md-w-28 md:w-64 ml-5 mt-2">
                            <input
                                type="range"
                                value={progress}
                                onChange={handleProgressChange}
                                min="0"
                                max="100"
                                className="w-full h-4 bg-gray-300 appearance-none rounded-md overflow-hidden"
                                style={{ background: `linear-gradient(to right, white 0%, white ${progress}%, transparent ${progress}%, transparent 100%)` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <audio ref={audioRef} className="w-48">
                        <source src={musicUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <button
                        onClick={handleResetClick}
                        className="ml-2 text-white hover:text-gray-800"
                    >
                        <FaRedo />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;

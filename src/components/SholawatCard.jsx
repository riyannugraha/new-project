import React from 'react';
import { Link } from 'react-router-dom';

function SholawatCard({ id, title }) {
    return (
        <div className='py-2'>
            <Link to={`/${id}`} >

                <div
                    className="p-5 rounded-md shadow-lg cursor-pointer relative">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-greenl opacity-30"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h1 className='font-medium text-lg font-Quisand text-white'>{title}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SholawatCard;
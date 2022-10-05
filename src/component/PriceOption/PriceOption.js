import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const {features} = option
    return (
        <div className='bg-indigo-300 p-5 mt-5 rounded-md mb-10'>
            <div >
                <p>
                    <span className='text-6xl text-white font-bold'>{option.price}</span>
                    <span className='text-2xl text-gray-300 '>/mon</span>
                </p>
                <p className='text-3xl my-4'>{option.name}</p>
                
            </div>
            {
                features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='bg-green-500 w-full py-2 rounded-md mt-4 text-white font-bold '>Buy Now</button>

        </div>
    );
};

export default PriceOption;
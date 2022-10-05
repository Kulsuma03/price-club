import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Priceing = () => {
    const pricingOptions = [
        {
            id: 1, 
            name: 'Free',
            price: 0,
            features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Will Never Use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
            },
        {
            id: 2,
             name: 'Medium',
             price: 9.99,
             features: [
                 'Everything on Free',
                 'Extra Feature',
                 'Unnecessary Feature',
                 'Will Never Use Feature',
                 'Hudai Feature',
                 'Ajaira Feature'
             ]
        },
        {
            id: 3,
             name: 'Premium', 
             price: 19.99,
             features: [
                 'Everything on Premium',
                 'Extra Feature',
                 'Unnecessary Feature',
                 'Will Never Use Feature',
                 'Hudai Feature',
                 'Ajaira Feature'
             ]
        },
        
    ]
    return (
        <div className='mx-12'>
            <h3 className='text-4xl rounded-md  text-white font-bold bg-indigo-400 p-12'>Best Deal Of The Town</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
            {
                pricingOptions.map(option => <PriceOption
                key={option.id}
                option={option}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Priceing;
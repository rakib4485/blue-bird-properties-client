import React from 'react';
import properties from '../../../assets/images/why-choose-properties.png';
import agent from '../../../assets/images/why-choose-agent.png';
import rent from '../../../assets/images/why-choose-rent.png';
import assets from '../../../assets/images/why-choose-assets.png';
import FeatureCard from './FeatureCard';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: "Find Your Dream Home",
            img: properties,
            describe: 'There many variation of pasages of lorem sum available.'
        },
        {
            id: 2,
            title: "Experienced Agents",
            img: agent,
            describe: 'There many variation of pasages of lorem sum available.'
        },
        {
            id: 3,
            title: "Buy or Rent Homes",
            img: assets,
            describe: 'There many variation of pasages of lorem sum available.'
        },
        {
            id: 4,
            title: "List Your Own Property",
            img: rent,
            describe: 'There many variation of pasages of lorem sum available.'
        },
    ]
    return (
        <div className='bg-[#E9EBF0] mt-20 pb-32'>
            <div style={{background: 'url(https://i.ibb.co/NsFPXnz/why-choose-one-shape-1.png)', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}>
                <h4 className="text-2xl text-center py-4 font-semibold">Why Choose Us</h4>
            </div>

            <div className="grid grid-cols-4 gap-6 mx-[7%]">
                {
                    features.map(feature => <FeatureCard feature={feature}/>)
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;
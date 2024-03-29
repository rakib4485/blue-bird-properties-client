import React from 'react';
import PropertyDescription from './PropertyDescription/PropertyDescription';
import PropertyVideo from './PropertyVideo/PropertyVideo';
import PropertyOffers from './PropertyOffers/PropertyOffers';
import PropertyPlan from './PropertyPlan/PropertyPlan';
import RecentlyAdded from './RecentlyAdded/RecentlyAdded';
import PropertyOwner from './PropertyOwner/PropertyOwner';
import PropertyReviews from './PropertyReviews/PropertyReviews';

const PropertyDetailsBody = ({property}) => {
    const { _id, description, video, location, propertyPlan, area} = property;
    return (
        <div className='md:flex gap-8 mx-[7%] justify-between'>
            <div className='md:w-[60%]'>
                <PropertyDescription description= {description} location={location} area={area}/>
                <PropertyVideo video={video}/>
                <PropertyOffers property={property}/>
                <PropertyPlan/>
                <PropertyReviews id={_id}/>
            </div>
            <div className='md:w-[40%] mt-5 md:sticky md:h-[1000px] top-2'>
                <PropertyOwner property={property}/>
                <RecentlyAdded/>
            </div>
        </div>
    );
};

export default PropertyDetailsBody;
import React from 'react';
import PropertyDetailsBanner from '../PropertyDetailsBanner/PropertyDetailsBanner';
import { useLoaderData } from 'react-router-dom';
import PropertyDetailsBody from '../PropertyDtailsBody/PropertyDetailsBody';

const PropertyDetails = () => {
    const propertyDetails = useLoaderData();
    return (
        <div>
            <PropertyDetailsBanner propertyDetails={propertyDetails}/>
            <PropertyDetailsBody property={propertyDetails} />
        </div>
    );
};

export default PropertyDetails;
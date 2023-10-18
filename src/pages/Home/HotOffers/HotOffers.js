import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import PropertyCard from '../../../components/PropertyCard/PropertyCard';
import { useQuery } from '@tanstack/react-query';

const HotOffers = () => {
    const {data: properties = [], refetch, isLoading} = useQuery({
        queryKey: ['properties'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/properties/');
            const data = await res.json();
            return data;
        }
    })
    const offers = [...properties].reverse().slice(0,9)
    return (
        <div className='mt-20 mx-[7%]'>
            <h4 className='text-xl font-semibold text-green-600'>Browse Hot Offers</h4>
            <h1 className='text-5xl font-bold capitalize'>Latest Properties</h1>
            {/* <PropertyCard/> */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                
                modules={[Autoplay]}
                className="mySwiper my-20"
            >
                {offers.map(offer => <SwiperSlide key={offer.id}> <PropertyCard key={offer.id} property={offer}/></SwiperSlide>)}

            </Swiper>
        </div>
    );
};

export default HotOffers;
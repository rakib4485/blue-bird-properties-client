import { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect( () =>{
        fetch(`http://localhost:5000/users/seller/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsSeller(data.isSeller);
            setIsSellerLoading(false);
            // console.log(data.isAdmin);
        })
    }, [email])
    return [isSeller, isSellerLoading]; 
};

export default useSeller;
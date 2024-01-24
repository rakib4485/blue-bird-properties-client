import { useEffect, useState } from "react";


const useRequest = (email) => {
    const [isRequest, setIsRequest] = useState(false);
    const [isRequestLoading, setIsRequestLoading] = useState(true);
    useEffect( () =>{
        fetch(`http://localhost:5000/users/request/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsRequest(data.isRequest);
            setIsRequestLoading(false);
            // console.log(data.isRequest);
        })
    }, [email])
    return [isRequest, isRequestLoading]; 
};

export default useRequest;
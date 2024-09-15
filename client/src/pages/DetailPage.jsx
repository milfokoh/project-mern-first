import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router"; 
import { useHttp } from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { LinkCard } from "../components/LinkCard";



 const DetailPage = () => {
    const {token} = useContext();
    const {request, loading} = useHttp();
    const [link, setLink] = useState(null);

    const linksId = useParams().id;

    const getLink = useCallback( async () => {
        try {
            const fetched =  await request(`/api/link/${link.id}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            }); 
            setLink(fetched);           
        } catch (error) {
            
        }
    }, [token, linksId, request]);

    useEffect( () => {
        getLink();
    },[getLink]);

    if (loading) {
        return <Loader/>;
    }

    return (
        <div>
            { !loading && link && <LinkCard link={link}/>}
        </div>
    )
 }


export default DetailPage;
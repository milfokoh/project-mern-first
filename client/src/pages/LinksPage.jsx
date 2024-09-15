import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from "../context/AuthContext";
import { Loader } from "../components/Loader";
import { LinksList } from "../components/LinksList";


 const LinksPage = () => {
    const [links, setLinks] = useState([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);
    
    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link','GET', null, {
                Authorization: `Bearer ${token}`
            });
            setLinks(fetched);
        } catch (error) {
            
        }
    },[token, request]);

    useEffect( () => {
        fetchLinks();
    },[fetchLinks]);

    if (loading) {
        return <Loader/>;
    }

    return (
        <div className="row-oth-page">
         <h1 className="page-title">Здесь будет какой то раздел</h1>
            {!loading && <LinksList links={links}/>}
        </div>
    )
 }


export default LinksPage;
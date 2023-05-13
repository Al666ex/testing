import { useMemo } from "react";
import {  useSelector } from 'react-redux';

export const usePosts = (query) => {    
    const posts = useSelector(state => state.customers);             
    const rusultQuery = useMemo(() => 
        query.length > 2 ? 
            [...posts].filter(item => item.toLowerCase().includes(query.toLowerCase())) : 
                []        
    ,[query,posts]) 
    return rusultQuery;
}



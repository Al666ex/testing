import { useMemo } from "react"

export const usePosts = (query, posts) => {
    console.log('usePost')
    const rusultQuery = useMemo(() => {
        if(query){
            return [...posts].filter(item => item.toLowerCase().includes(query.toLowerCase())) 
        }else {
            return posts
        }
    },[query, posts]) 
    return rusultQuery;
}
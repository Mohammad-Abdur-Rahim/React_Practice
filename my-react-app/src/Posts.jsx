import { useEffect } from "react";
import { useState } from "react"

export default function Posts(){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return(

        <div>
            <h2>Post:{posts.length}</h2>
        </div>
    )
}
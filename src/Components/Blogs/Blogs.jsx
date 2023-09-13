import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlosgs] = useState([])


    // data load with useEffect
    useEffect(() =>{
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data => setBlosgs(data))
    },[])

    return (
        <div className="w-2/3">
            <h1 className=" text-4xl">Blog: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;
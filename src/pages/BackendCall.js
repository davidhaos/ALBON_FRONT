import React from 'react'
import {useState, useEffect} from 'react'

function BackendCall() {
    
        const [data, setData] = useState(null);

    
        useEffect(() => {
            async function fetchData() {
                const response = await fetch("http://localhost:9000/testAPI");
                const res = await response.json();
                setData(res.message);
            }
            fetchData();
        }, []);
    
        return (
            <div>
                <p>{!data ? "Loading..." : data}</p>
            </div>
        );
    }




export default BackendCall

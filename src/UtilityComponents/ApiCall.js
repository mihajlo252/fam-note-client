import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const ApiCall = () => {

    const [data, setData] = useState([]);

    const placeholderApi = async () => {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );
        setData(res.data);
    };
    useEffect(() => {
        placeholderApi();
        // console.log(data[Math.floor(Math.random() * 200)]);
    }, []);

  return data
}

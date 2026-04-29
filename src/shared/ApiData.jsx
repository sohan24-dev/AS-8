import React from 'react';

export const ApiData = async() => {
     
   const res = await fetch('http://localhost:3000/data.json')
    const cowData =await res.json()
    return cowData
};

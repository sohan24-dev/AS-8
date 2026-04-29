import React from 'react';

export const ApiData = async () => {

    const res = await fetch("https://ass-08.vercel.app/data.json", {
        cache: "no-store",
    });
    const cowData = await res.json()
    return cowData
};



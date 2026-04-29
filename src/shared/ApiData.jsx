import React from 'react';

export const ApiData = async () => {

    const res = await fetch("http://localhost:3000/data.json", {
        cache: "no-store",
    });
    const cowData = await res.json()
    return cowData
};

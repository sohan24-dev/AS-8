"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AllAnimalsClient = ({ animals =[] }) => {
    const [data, setData] = useState(animals || []);

    const SortHandle = (type) => {
        let sortedData = [...data];

        if (type === "low") {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (type === "high") {
            sortedData.sort((a, b) => b.price - a.price);
        }

        setData(sortedData);
    };

    return (
        <div>
            <div className="flex justify-between items-center my-4">
                <div><p className="text-2xl font-bold">All Animals</p></div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Sort by price ⬇️
                    </div>

                    <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
                        <li>
                            <button onClick={() => SortHandle("low")}>
                                Low → High
                            </button>
                        </li>
                        <li>
                            <button onClick={() => SortHandle("high")}>
                                High → Low
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data.map((animal) => (
                    <div key={animal.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className="relative w-full aspect-square">
                            <Image
                                src={animal.image || "/no-image.jpg"}
                                alt={animal.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-4">
                            <h2 className="text-xl font-semibold">
                                {animal.name}
                            </h2>

                            <p>Category: {animal.category}</p>

                            <p className="text-green-600 font-bold">
                                ৳ {animal.price}
                            </p>

                            <Link href={`/allanimals/${animal.id}`}>
                                <button className="btn w-full mt-2 bg-blue-600 text-white">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllAnimalsClient;
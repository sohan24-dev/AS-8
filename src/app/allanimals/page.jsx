"use client";

import { useEffect, useState } from "react";
import { ApiData } from "@/shared/ApiData";
import Image from "next/image";
import Link from "next/link";

const Allanimals = () => {
    const [animals, setAnimals] = useState([]);

    // fetch data
    useEffect(() => {
        const loadData = async () => {
            const data = await ApiData();
            setAnimals(data);
        };
        loadData();
    }, []);

    const SortHandle = (type) => {
        let sortedData = [...animals];

        if (type === "low") {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (type === "high") {
            sortedData.sort((a, b) => b.price - a.price);
        }

        setAnimals(sortedData); 
    };

    return (
        <div>
            <div className="flex items-center justify-between my-4">
                <h2 className="text-xl font-medium">All Animals</h2>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Sort ⬇️
                    </div>

                    <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <button onClick={() => SortHandle("low")}>
                                Price: Low → High
                            </button>
                        </li>
                        <li>
                            <button onClick={() => SortHandle("high")}>
                                Price: High → Low
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {animals.map((animal) => (
                    <div key={animal.id}>
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
                                <Image
                                    src={animal.image || "/no-image.jpg"}
                                    alt={animal.name || "Animal image"}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="p-4 space-y-2">
                                <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
                                    {animal.name}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Category:{" "}
                                    <span className="font-medium">
                                        {animal.category}
                                    </span>
                                </p>


                                <p className="text-green-600 font-semibold">
                                    ৳ {animal.price}
                                </p>


                                <Link href={`/allanimals/${animal.id}`}>
                                    <button className="mt-3 w-full btn bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 ">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Allanimals;

import { ApiData } from "@/shared/ApiData";
import Image from "next/image";
import Link from "next/link";

const AnimalForHome = async () => {
    const cowData = await ApiData();
    const cowDataSlice = cowData.slice(0,4)

    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {cowDataSlice.map((animal) => (
                    <div key={animal.id}>
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            {/* Image Section */}
                            <div className="relative w-full aspect-square bg-gray-100">
                                {animal?.image ? (
                                    <Image
                                        src={animal.image}
                                        alt={animal.name || "Animal image"}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">
                                        No Image Available
                                    </div>
                                )}
                            </div>

                            {/* Content */}
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

                                {animal.price && (
                                    <p className="text-green-600 font-semibold">
                                        ৳ {animal.price}
                                    </p>
                                )}

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

export default AnimalForHome;
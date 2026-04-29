import Image from "next/image";

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://ass-08.vercel.app/data.json", {
        cache: "no-store",
    });

    const data = await res.json();
    const animal = data.find(item => item.id == id);

    // console.log(animal);

    return (
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border">

            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
                <Image
                    src={animal.image || "/no-image.jpg"}
                    alt={animal.name || "Animal image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-6 space-y-4">

                <h2 className="text-2xl font-bold text-gray-800">
                    {animal.name}
                </h2>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                    <p><span className="font-semibold">Type:</span> {animal.type}</p>
                    <p><span className="font-semibold">Breed:</span> {animal.breed}</p>
                    <p><span className="font-semibold">Category:</span> {animal.category}</p>
                    <p><span className="font-semibold">Location:</span> {animal.location}</p>
                    <p><span className="font-semibold">Age:</span> {animal.age} year(s)</p>
                    <p><span className="font-semibold">Weight:</span> {animal.weight} kg</p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
                    <p className="text-gray-600">{animal.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                    <p className="text-xl font-bold text-green-600">
                        ৳ {animal.price}
                    </p>

                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Buy Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;
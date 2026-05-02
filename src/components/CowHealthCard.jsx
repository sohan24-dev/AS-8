

const CowHealthCard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-3">Cow Food List and Cow Health Tips</h1>
            <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
                         Cow Food List
                    </h2>

                    <p className="text-gray-600 mt-2">
                        Cows are herbivores and eat only plant-based natural food.
                    </p>

                    <ul className="list-disc ml-5 mt-4 text-gray-700 space-y-2">
                        <li>Fresh green grass</li>
                        <li>Dry hay (straw)</li>
                        <li>Corn / Maize</li>
                        <li>Wheat & rice bran</li>
                        <li>Silage (fermented fodder)</li>
                        <li>Clean drinking water</li>
                    </ul>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
                         Cow Health Tips
                    </h2>

                    <p className="text-gray-600 mt-2">
                        Good care and balanced diet keep cows strong and healthy.
                    </p>

                    <ul className="list-disc ml-5 mt-4 text-gray-700 space-y-2">
                        <li>Eat fiber-rich grass for digestion</li>
                        <li>Drink clean and fresh water daily</li>
                        <li>Keep shelter clean and dry</li>
                        <li>Regular vaccination & vet checkup</li>
                        <li>Enough rest and open space movement</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default CowHealthCard;
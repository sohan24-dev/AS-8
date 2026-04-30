"use client";

const data = {
  qurbani_tips: [
    "Choose a healthy animal with bright eyes, active movement, and clean nose",
    "Check proper age (goat/sheep: 1+ year, cow: 2+ years)",
    "Avoid animals with defects like limping, blindness, or severe illness",
    "Buy early to get better price and healthier selection",
    "Ensure humane handling with sharp knife and calm environment during Qurbani"
  ],
  top_breeds: [
    "Sahiwal cattle - strong, heat resistant, good meat quality",
    "Brahman cattle - large size, high meat production, disease resistant",
    "Deshi cattle - local breed, affordable, good quality meat",
    "Black Bengal goat - fast growth, high-quality meat, very popular in Bangladesh",
    "Boer goat - heavy meat producer, fast-growing and large sized"
  ]
};

export default function Tips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">

      <div className="rounded-2xl shadow-lg border p-5 bg-white">
        <h2 className="text-xl font-bold mb-4"> Qurbani Tips</h2>
        <ul className="space-y-2 list-disc pl-5 text-gray-700">
          {data.qurbani_tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl shadow-lg border p-5 bg-white">
        <h2 className="text-xl font-bold mb-4"> Top Breeds</h2>
        <ul className="space-y-2 list-disc pl-5 text-gray-700">
          {data.top_breeds.map((breed, index) => (
            <li key={index}>{breed}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
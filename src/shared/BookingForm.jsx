"use client"


import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const BookingForm = () => {
    const router = useRouter();
    const handBooking = (e) => {
         e.preventDefault();
        toast.success('Booking success')
        router.push('/');
    }
    return (
        <div className="flex justify-center items-center py-6 px-4">

            <form onSubmit={handBooking} className="w-full max-w-md bg-white shadow-2xl border border-gray-100 rounded-3xl p-8 space-y-5">


                <h2 className="text-3xl font-bold text-center"> Booking Form</h2>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 "
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 "
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Phone
                    </label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 "
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 "
                        required
                    />
                </div>

                <button type='submit' className="btn w-full mt-4 py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300">
                    Confirm Booking
                </button>

            </form>

        </div>
    );
};

export default BookingForm;